import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axiostance';
import { formatCurrency } from '../../utils';

const ReportItems = ({ ownerId, selectedPeriod, referenceDate }) => {
  const {
    data: itemsReport,
    isLoading: isLoadingItems,
    isError: isErrorItems,
    error: itemsError,
    refetch: refetchItems,
  } = useQuery({
    queryKey: ['reportItems', ownerId, selectedPeriod, referenceDate],
    queryFn: async () => {
      const response = await axiosInstance(`reports/items?owner_id=${ownerId}&period=${selectedPeriod}&sort=totalSalesPerProduct&sortBy=-1&referenceDate=${referenceDate}`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    onError: (err) => {
      console.error('Error fetching items:', err.message);
      Alert.alert('Hato', `Mahsulotlarni yuklashda xatolik yuz berdi.: ${err.message}`);
    },
  });

  if (isLoadingItems) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.loadingText}>Sara mahsulotlar yuklanmoqda...</Text>
      </View>
    );
  }

  if (isErrorItems) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {itemsError?.message || 'Mahsulotlarni yuklashda xatolik yuz berdi.'}</Text>
        <Button mode="contained" onPress={refetchItems} style={styles.retryButton}>
          Qayta urinish
        </Button>
      </View>
    );
  }

  const itemColors = ['#4A90E2', '#50E3C2', '#F5A623', '#BD10E0', '#FF4E50'];

  return (
    <Card style={styles.itemsContainer}>
      <Card.Content>
        {itemsReport.length > 0  && <Title style={styles.sectionTitle}>Ko'p sotilgan mahsulotlar</Title>}
        {itemsReport.length > 0 ? (
          itemsReport.map((item, index) => (
            <View style={styles.itemContainer} key={item.product_id || index}>
              <View style={[styles.itemIcon, { backgroundColor: itemColors[index % itemColors.length] }]} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.itemQuantity}>x {item.totalQuantity}</Text>
              </View>
              <Text style={styles.itemSales}>{formatCurrency(item.totalSalesPerProduct)}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>Ushbu davrda mahsulot sotilmagan</Text>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
    paddingHorizontal: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    paddingHorizontal: 20,
  },
  retryButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#4A90E2',
  },
  sectionTitle: {
    fontSize: 18,
    width: "100%",
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 14,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemsContainer: {
    margin: 20,
    backgroundColor: '#fff',
    paddingVertical: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 15,
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  itemQuantity: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  itemSales: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  noDataText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    paddingVertical: 20,
  },
});

export default ReportItems;