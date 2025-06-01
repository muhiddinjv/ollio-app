import { useMutation } from "@tanstack/react-query";
import { goodDelete, goodEdit, processSale, userAdd } from "./requests";

export const useGoodAdd = () => useMutation({
    mutationFn: (goods) => goodsAdd(goods),
    meta: {
        invalidates: ['stock'],
        onSuccess: 'Tovar qoshildi',
        onError: 'Tovar qoshishda xatolik yuz berdi',
      },
  });

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


export const useUserAdd = () => useMutation({
    mutationFn: (user) => userAdd(user),
    meta: {
      invalidates: ['stock'],
      onSuccess: 'Tovar saqlandi',
      onError: 'Tovar saqlashda xatolik yuz berdi',
    },
});