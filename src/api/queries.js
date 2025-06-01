import { useCallback, useMemo, useState } from "react";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";

import { goodDelete, goodEdit, processSale } from "./requests";
import { useAuth } from "../screens/Auth/AuthPro";
import axiosInstance from "./axiostance";

export const useInfiniteScroll = ({
    key = [],
    url,
    limit = 25,
    userId = null,
    filters = {},
  }) => {
    const { signedIn } = useAuth();
  
    const [isRefreshing, setIsRefreshing] = useState(false);
  
    const queryKey = useMemo(() => (
      signedIn ? ['infiniteScroll', ...key, userId, filters] : null
    ), [key, userId, filters, signedIn]);
  
    const queryFn = async ({ pageParam = 1 }) => {
      const { data } = await axiosInstance.get(url, {
        params: { page: pageParam, limit, ...filters },
      });
  
      return { data, nextPage: pageParam + 1 };
    };
  
    const {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      refetch,
      isError,
      error,
      isLoading,
    } = useInfiniteQuery({
      queryKey,
      queryFn,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>
        lastPage?.data?.length < limit ? undefined : allPages.length + 1,
      enabled: !!signedIn, // 👈 prevent fetch if not signed in
      retry: false,
    });
  
    const onRefresh = useCallback(() => {
      if (!isRefreshing) {
        setIsRefreshing(true);
        refetch().finally(() => setIsRefreshing(false));
      }
    }, [isRefreshing, refetch]);
  
    const flattenData = useMemo(() => (
      data?.pages?.flatMap(page => page?.data || []) || []
    ), [data]);
  
    return {
      data: flattenData,
      onEndReached: hasNextPage ? fetchNextPage : () => {},
      isRefreshing,
      onRefresh,
      isFetchingNextPage,
      isLoading,
      isError,
      error,
      refetch,
    };
  };

export const useGoodDelete = (productId) => useMutation({
    mutationFn: () => goodDelete(productId),
    meta: {
        invalidates: ['stock'],
        onSuccess: 'Tovar o\'chirildi',
        onError: 'Tovar o\'chirishda xatolik yuz berdi',
    },
});

export const useGoodEdit = () => useMutation({
    mutationFn: (good) => goodEdit(good),
    meta: {
      invalidates: ['stock'],
      onSuccess: 'Tovar saqlandi',
      onError: 'Tovar saqlashda xatolik yuz berdi',
    },
});

export const useSale = (setPayLoading) => useMutation({
    mutationFn: (billId) => processSale(billId),
    meta: {
        invalidates: ['bills'],
        onSuccess: 'Savdo qilindi',
        onError: 'Savdo qilishda xatolik yuz berdi',
        onSettled: () => {
            setPayLoading(false);
        },
    },
});