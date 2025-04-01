import { useCallback, useMemo, createContext, useState, useEffect, useContext } from "react"
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "react-native-paper";
import { useInfiniteQuery } from "@tanstack/react-query"
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash"
import { getAccessToken } from "../screens/Auth/astorage"
import axiosInstance from "../screens/Auth/axiostance";
import { useNavigation } from "@react-navigation/native";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState(null);
    const [goodQty, setGoodQty] = useState(0);
    const [goodId, setGoodId] = useState(null);
    const [selectedGoods, setSelectedGoods] = useState([]);
    
    useEffect(() => {
      const loadStorageData = async () => {
        const storedUser = await AsyncStorage.getItem("user");
        const storedClients = await AsyncStorage.getItem("clients");
        const storedClient = await AsyncStorage.getItem("client");
        setUser(storedUser ? JSON.parse(storedUser) : null);
        setClient(storedClient ? JSON.parse(storedClient) : null);
        setClients(storedClients ? JSON.parse(storedClients) : []);
      };
      loadStorageData();
    }, []);
  
    useEffect(() => {
      AsyncStorage.setItem("user", JSON.stringify(user));
      AsyncStorage.setItem("client", JSON.stringify(client));
      AsyncStorage.setItem("clients", JSON.stringify(clients));
      AsyncStorage.setItem('selectedGoods', JSON.stringify(selectedGoods));
    }, [user, client, clients, selectedGoods]);
  
    return (
      <GlobalContext.Provider 
        value={{ 
          user, setUser,
          clients, setClients,
          client, setClient,
          goodId, setGoodId, 
          goodQty, setGoodQty,
          selectedGoods, setSelectedGoods
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
};
  
export const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      console.error("GlobalContext is undefined! Ensure GlobalProvider is wrapping your component tree.");
      throw new Error('useGlobalState must be used within a GlobalProvider');
    }
    return context;
};

export const useInfiniteScroll = ({ key, url, limit = 100, filters }) => {
    const queryKey = [ ...key, ..._.values(_.omitBy(filters || {}, _.isEmpty))]
      .filter(c => Boolean(c) && !_.isEmpty(c))
  
    const [isRefreshing, setIsRefreshing] = useState(false)
  
    const queryFn = async ({ pageParam = 1 }) => {
      const accessToken = await getAccessToken()
    
      const { data } = await axiosInstance.get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          page: pageParam,
          limit,
          ...filters  
        }
      })
    
      return {
        data: data,
        nextPage: pageParam + 1
      }
    }
    
    const {
      data,
      hasNextPage,
      fetchNextPage,
      isFetchingNextPage,
      refetch
    } = useInfiniteQuery({
      queryKey,
      queryFn,
      initialPageParam: 1,
      getNextPageParam: (lastPage, __, lastPageParam) => {
        if (lastPage.data.length < limit) {
          return undefined
        }
        return lastPageParam + 1
      },
      getPreviousPageParam: (_, __, firstPageParam) => {
        if (firstPageParam === 1) {
          return undefined
        }
        return firstPageParam - 1
      }
    })
  
    const loadNext = useCallback(() => {
      hasNextPage && fetchNextPage()
    }, [fetchNextPage, hasNextPage])
  
    const onRefresh = useCallback(() => {
      if (!isRefreshing) {
        setIsRefreshing(true)
        refetch()
          .then(() => setIsRefreshing(false))
          .catch(() => setIsRefreshing(false))
      }
    }, [isRefreshing, refetch])
  
    const flattenData = useMemo(() => {
      return data?.pages.flatMap(page => page.data) || []
    }, [data?.pages])
  
    return {
      data: flattenData,
      onEndReached: loadNext,
      isRefreshing,
      onRefresh,
      isFetchingNextPage
    }
}

export const useGetGood = (goodId) => {
    const fetchGood = async () => {
      const accessToken = await getAccessToken();
      const response = await axiosInstance.get(`stock/${goodId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    };
  
    return useQuery({
      queryKey: ["GET_GOOD", goodId],
      queryFn: fetchGood,
      enabled: !!goodId, // Only run the query if goodId is provided
      onError: (error) => {
        console.error("Error fetching good:", error);
      },
    });
};

export const useCatalog = () => {
    const fetchCatalog = async () => {
        const accessToken = await getAccessToken();
        const response = await axiosInstance.get("catalog", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data;
    };

    return useQuery({
        queryKey: ["CATALOG_ITEMS"],
        queryFn: async () => {
          return await fetchCatalog()
            .then((res) => res)
            .catch((err) => console.log(err));
        },
      });
};

export const useHeaderStyle = (title, rightIcon, screenName) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTitle: title,
      headerTintColor: colors.surface,
    //   headerRight: rightIcon && (() => {
    //     return  (
    //         <Button
    //             icon={rightIcon}
    //             mode="contained"
    //             labelStyle={{ fontSize: 19 }}
    //             onPress={() => navigation.navigate(screenName)}
    //         />
    //     )
    //   }),
    }
}




