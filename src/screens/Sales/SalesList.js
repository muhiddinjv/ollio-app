import { useState } from 'react';
import { Platform, RefreshControl, Text, View } from 'react-native';
import { ActivityIndicator, Appbar, Button, IconButton, useTheme } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { DrawerActions } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { styled } from 'nativewind';

import ListItem from '../../components/ListItem';
import Loader from '../../components/Loader';
import Numpad from '../../components/Numpad';
import { useGlobalState, useInfiniteScroll } from '../../hooks';
import { useAuth } from '../Auth/AuthPro';

const StyledPicker = styled(Picker);
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

function SalesList({ navigation }) {
  const { bill, saveBill, addProductToBill, getTotalQuantity } = useGlobalState();
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters] = useState({ search: '' });
  const [quantity, setQuantity] = useState('');
  const { colors } = useTheme();
  const { user } = useAuth();

  const { data, isRefreshing, onRefresh, onEndReached, isFetchingNextPage } = useInfiniteScroll({
    url: 'stock',
    filters,
    key: ['stock'],
  });

  const handleProductPress = product => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleSaveQuantity = () => {
    const { product_id, title, price } = selectedProduct;
    if (quantity > 0 && product_id) {
      addProductToBill(product_id, parseFloat(quantity), title, price);
      setIsModalVisible(false);
      setQuantity('');
    }
  };

  const handlePress = IsOpenBills => {
    if (IsOpenBills) {
      navigation.navigate('Cheklar');
    } else {
      saveBill();
      navigation.navigate('Cheklar');
    }
  };

  const handleCharge = () => {
    saveBill();
    navigation.navigate('SaleMade');
  };

  const handleThreeDots = () => {
    alert('uchta nuqta bosildi');
  };

  return (
    <View className="w-full flex-1 dark:bg-slate-800">
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          color={colors.surface}
        />
        <Appbar.Content title="Savdo" titleStyle={{ color: colors.surface }} />
        <Button
          icon="cart"
          mode="contained"
          labelStyle={{ fontSize: 19 }}
          onPress={() => navigation.navigate('BillCart')}
        >
          {getTotalQuantity() || ''}
        </Button>
        <Appbar.Action
          icon={bill.client_id ? 'account-check' : 'account-plus'}
          onPress={() => navigation.navigate('UserList')}
          color={colors.surface}
          disabled={user?.store_type === 'retail'}
        />
        <Appbar.Action icon={MORE_ICON} onPress={handleThreeDots} color={colors.surface} />
      </Appbar.Header>
      <Numpad
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
          setQuantity('');
        }}
        onConfirm={value => {
          setQuantity(value);
          handleSaveQuantity();
        }}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedProduct={selectedProduct}
      />
      <View className="flex-row gap-2 bg-white px-2 pb-2 dark:bg-slate-800">
        <Button mode="contained" onPress={() => handlePress(bill.products.length === 0)} style={{ flex: 1 }}>
          {bill.products.length === 0 ? 'CHEKLAR' : 'SAQLASH'}
        </Button>
        <Button mode="contained" style={{ flex: 1 }} onPress={handleCharge} disabled={bill.products.length === 0}>
          <Text>SAVDO</Text>
        </Button>
      </View>

      <View className="h-14 flex-row items-center border border-gray-400 pl-4">
        <StyledPicker
          mode="dropdown"
          selectedValue={selectedValue}
          onValueChange={itemValue => setSelectedValue(itemValue)}
          className="w-4/5 text-base dark:text-white"
        >
          <Picker.Item label="Category 1" value="category1" />
          <Picker.Item label="Category 2" value="category2" />
          <Picker.Item label="Category 3" value="category3" />
        </StyledPicker>
        <View className="flex h-full w-1/5 items-center justify-center border-l border-gray-400">
          <IconButton size={30} icon="magnify" onPress={() => console.log('magnify clicked')} />
        </View>
      </View>

      {Array.isArray(data) ? (
        <FlashList
          data={data}
          onEndReached={onEndReached}
          onEndReachedThreshold={2}
          removeClippedSubviews
          estimatedItemSize={84}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => (
            <ListItem
              onSalesScreen
              key={item._id}
              goodId={item._id}
              title={item.title}
              navigate={navigation.navigate}
              description={item.description}
              price={item.price}
              setIsModalVisible={() => handleProductPress(item)}
            />
          )}
          LoaderComponent={<Loader />}
          ListEmptyComponent={
            <View className="flex-1 items-center">
              <Text className="p-5 text-base text-gray-600">Sizda hozircha maxsulotlar yo&apos;q.</Text>
            </View>
          }
          ListFooterComponent={() => {
            // eslint-disable-next-line no-unused-expressions
            isFetchingNextPage && <ActivityIndicator />;
          }}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
}

export default SalesList;
