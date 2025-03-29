import { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [goodQty, setGoodQty] = useState(0);
  const [goodId, setGoodId] = useState(null);
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const loadSelectedGoods = async () => {
      const storedGoods = await AsyncStorage.getItem('selectedGoods');
      setSelectedGoods(storedGoods ? JSON.parse(storedGoods) : []);
    };
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(storedUser);
      }
    };
    loadSelectedGoods();
    loadUser();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('selectedGoods', JSON.stringify(selectedGoods));
  }, [selectedGoods]);

  return (
    <GlobalContext.Provider 
      value={{ 
        user, setUser,
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
