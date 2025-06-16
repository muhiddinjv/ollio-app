import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import {
  RadioButton,
  Portal,
  Dialog,
  IconButton,
  Button,
  useTheme,
  Appbar,
} from 'react-native-paper';

import ReportSummary from './ReportSummary';
import ReportItems from './ReportItems';
import { DrawerActions, useNavigation } from '@react-navigation/native';

dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);


const OWNER_ID = '683ae7a525f3dfb03114e056';

const ReportMain = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [showPeriodPicker, setShowPeriodPicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const navigation = useNavigation();
  const { colors } = useTheme();

  const periodLabels = {
    day: 'Kun',
    week: 'Hafta',
    month: 'Oy',
    year: 'Yil',
  };

  const getPeriodDisplayText = useCallback(() => {
    switch (selectedPeriod) {
      case 'day':
        return currentDate.format('D MMMM');
      case 'week':
        const startOfWeek = currentDate.startOf('week').format('D MMM');
        const endOfWeek = currentDate.endOf('week').format('D MMM');
        return `${startOfWeek} - ${endOfWeek}`;
      case 'month':
        return currentDate.format('MMMM');
      case 'year':
        return currentDate.format('YYYY');
      default:
        return 'Davr tanlang';
    }
  }, [selectedPeriod, currentDate]);

  // Navigation functions
  const navigatePrevious = () => {
    setCurrentDate(prev => {
      switch (selectedPeriod) {
        case 'day':
          return prev.subtract(1, 'day');
        case 'week':
          return prev.subtract(1, 'week');
        case 'month':
          return prev.subtract(1, 'month');
        case 'year':
          return prev.subtract(1, 'year');
        default:
          return prev;
      }
    });
  };

  const navigateNext = () => {
    setCurrentDate(prev => {
      switch (selectedPeriod) {
        case 'day':
          return prev.add(1, 'day');
        case 'week':
          return prev.add(1, 'week');
        case 'month':
          return prev.add(1, 'month');
        case 'year':
          return prev.add(1, 'year');
        default:
          return prev;
      }
    });
  };

  // Use current date as reference for consistent period calculation across queries
  const referenceDate = currentDate.toISOString();

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{backgroundColor: colors.primary, ...styles.header}}>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          color={colors.surface}
        />
        <Appbar.Content title="Hisobot" titleStyle={{ color: colors.surface }} />
        <View style={styles.navigationContainer}>
          <Appbar.Action
            icon="chevron-left"
            color="#fff" 
            size={30} 
            onPress={navigatePrevious}
            rippleColor="rgba(255, 255, 255, 0.2)"
          />
          <Button
            mode="text"
            onPress={() => setShowPeriodPicker(true)}
            labelStyle={styles.periodButtonText}
            uppercase={false}
            rippleColor="rgba(255, 255, 255, 0.1)"
          >
            {getPeriodDisplayText()}
          </Button>
          <Appbar.Action
            icon="chevron-right"
            color="#fff"
            size={30}
            onPress={navigateNext}
            rippleColor="rgba(255, 255, 255, 0.2)"
          />
        </View>
      </Appbar.Header>

      <ScrollView 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <ReportSummary
          ownerId={OWNER_ID}
          selectedPeriod={selectedPeriod}
          referenceDate={referenceDate}
        />
        <ReportItems
          ownerId={OWNER_ID}
          selectedPeriod={selectedPeriod}
          referenceDate={referenceDate}
        />
      </ScrollView>

      <Portal>
        <Dialog 
          visible={showPeriodPicker} 
          onDismiss={() => setShowPeriodPicker(false)} 
          style={styles.periodPickerModal}
        >
          <Dialog.Title style={styles.periodPickerTitle}>Davr tanlang</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group 
              onValueChange={newValue => {
                setSelectedPeriod(newValue);
                setCurrentDate(dayjs()); // Reset to current date when changing period
                setShowPeriodPicker(false);
              }} 
              value={selectedPeriod}
            >
              {['day', 'week', 'month', 'year'].map((period) => (
                <RadioButton.Item
                  key={period}
                  label={periodLabels[period]}
                  value={period}
                  status={selectedPeriod === period ? 'checked' : 'unchecked'}
                  color="#5c6bc0"
                  labelStyle={styles.periodText}
                  style={styles.period}
                />
              ))}
            </RadioButton.Group>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  periodButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollViewContent: {
    paddingBottom: 30,
  },
  periodPickerModal: {
    width: '85%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  periodPickerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  period: {
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  periodText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default ReportMain;