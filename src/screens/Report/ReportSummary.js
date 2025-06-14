import React from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../api/axiostance';
import CircularProgress from './CircularProgress';
import { formatCurrency, formatPercentage, formatXAxisLabel, formatYLabel } from '../../utils';

const { width } = Dimensions.get('window');

const ReportSummary = ({ ownerId, selectedPeriod, referenceDate }) => {
  const {
    data: summaryDataAndGraph,
    isLoading: isLoadingSummary,
    isError: isErrorSummary,
    error: summaryError,
    refetch: refetchSummary,
  } = useQuery({
    queryKey: ['salesReport', ownerId, selectedPeriod, referenceDate],
    queryFn: async () => {
      const response = await axiosInstance(`reports/summary?owner_id=${ownerId}&period=${selectedPeriod}&referenceDate=${referenceDate}`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    onError: (err) => {
      console.error(err.message);
      Alert.alert('Hato', `Savdo hisobotini yuklashda xatolik yuz berdi: ${err.message}`);
    },
  });

  const summaryData = summaryDataAndGraph?.summary;
  const graphData = summaryDataAndGraph?.graphData ? {
    labels: summaryDataAndGraph.graphData.map(d => d.timeLabel).length > 0 ? summaryDataAndGraph.graphData.map(d => d.timeLabel) : ['No Data'],
    datasets: [{
      data: summaryDataAndGraph.graphData.map(d => d.salesAmount).length > 0 ? summaryDataAndGraph.graphData.map(d => d.salesAmount) : [0]
    }]
  } : null;

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.8,
    useShadowColorFromDataset: false,
    propsForLabels: {
      fontSize: 10,
      fontWeight: 'bold',
    },
    propsForBackgroundLines: {
      strokeDasharray: '0',
      stroke: '#f0f0f0',
    },
    fillShadowGradient: `rgba(76, 175, 80, 1)`,
    fillShadowGradientOpacity: 1,
    formatXLabel: (label)=> formatXAxisLabel(label,selectedPeriod),
  };

  if (isLoadingSummary) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5c6bc0" />
        <Text style={styles.loadingText}>Savdo hisoboti yuklanmoqda...</Text>
      </View>
    );
  }

  if (isErrorSummary) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {summaryError?.message || 'Hisobot yuklanmadi.'}</Text>
        <Button mode="contained" onPress={refetchSummary} style={styles.retryButton}>
          Retry
        </Button>
      </View>
    );
  }

  // Calculate progress values for circular indicators (mock values for demo)
  const billsProgress = Math.min((summaryData?.current?.totalBills || 0) / 1000 * 100, 100);
  const salesProgress = Math.min((summaryData?.current?.totalSales || 0) / 10000000 * 100, 100);
  const avgSaleProgress = Math.min((summaryData?.current?.averageSale || 0) / 100000 * 100, 100);

  return (
    <View style={styles.container}>
      <Card style={styles.summaryContainer}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Savdo hisoboti</Title>
          
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <CircularProgress
                size={90}
                strokeWidth={8}
                progress={billsProgress}
                color="#FF9800"
                backgroundColor="#FFE0B2"
              >
                <Text style={styles.circularValue}>{summaryData?.current?.totalBills || 0}</Text>
              </CircularProgress>
              <Text style={styles.summaryLabel}>Cheklar</Text>
              <Text style={[styles.percentageText, { color: '#FF9800' }]}>
                {formatPercentage(summaryData?.percentageChange?.bills)}
              </Text>
            </View>

            {/* Net Sales */}
            <View style={styles.summaryItem}>
              <CircularProgress
                size={110}
                strokeWidth={8}
                progress={salesProgress}
                color="#4CAF50"
                backgroundColor="#C8E6C9"
              >
                <View style={styles.circularContent}>
                  <Text style={styles.circularValueLarge}>{formatCurrency(summaryData?.current?.totalSales)}</Text>
                </View>
              </CircularProgress>
              <Text style={styles.summaryLabel}>Sof savdo</Text>
              <Text style={[styles.percentageText, { color: '#4CAF50' }]}>
                {formatPercentage(summaryData?.percentageChange?.sales)}
              </Text>
            </View>

            {/* Average Sale */}
            <View style={styles.summaryItem}>
              <CircularProgress
                size={90}
                strokeWidth={8}
                progress={avgSaleProgress}
                color="#2196F3"
                backgroundColor="#BBDEFB"
              >
                <Text style={styles.circularValue}>{formatCurrency(summaryData?.current?.averageSale)}</Text>
              </CircularProgress>
              <Text style={styles.summaryLabel}>O'rta savdo</Text>
              <Text style={[styles.percentageText, { color: '#2196F3' }]}>
                {formatPercentage(summaryData?.percentageChange?.averageSale)}
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Sales Graph */}
      <Card style={styles.graphContainer}>
        <Card.Content style={styles.graphContent}>
          {graphData && graphData.labels.length > 0 && graphData.labels[0] !== 'No Data' ? (
            <BarChart
              data={graphData}
              width={width - 40}
              height={250}
              chartConfig={chartConfig}
              verticalLabelRotation={selectedPeriod === 'day' ? 0 : 30}
              // yAxisLabel="UZS "
              formatYLabel={(yValue) => formatYLabel(yValue)}
              fromZero
              showValuesOnTopOfBars={false}
            />
          ) : (
            <Text style={styles.noDataText}>Ushbu davr uchun savdo hisoboti yo'q.</Text>
          )}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
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
    minHeight: 200,
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
    backgroundColor: '#5c6bc0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: 16,
    borderBottom: '#999', 
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  summaryContainer: {
    margin: 20,
    backgroundColor: '#fff',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 20,
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  circularValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  circularValueLarge: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  circularContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  percentageText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  graphContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  graphContent: {
    padding: 10,
    alignItems: 'center',
  },
  noDataText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    paddingVertical: 20,
  },
});

export default ReportSummary;