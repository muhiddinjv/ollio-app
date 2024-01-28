import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import {
  Avatar,
  Drawer,
  Title,
  Caption,
  Text as PaperText,
} from 'react-native-paper';

const HomeScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerWidth = 250;
  const animatedValue = new Animated.Value(0);

  const toggleDrawer = () => {
    const toValue = isDrawerOpen ? 0 : 1;

    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsDrawerOpen(!isDrawerOpen);
    });
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [drawerWidth, 0],
  });

  return (
    <View style={styles.container}>
      {isDrawerOpen && (
        <Animated.View style={[styles.overlay, { opacity: animatedValue }]} />
      )}

      <Animated.View
        style={[
          styles.drawer,
          { transform: [{ translateX: translateX }] },
        ]}
      >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              size={80}
            />
            <Title style={styles.title}>John Doe</Title>
            <Caption style={styles.caption}>john.doe@example.com</Caption>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.drawerItem}
            >
              <PaperText>Dashboard</PaperText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.drawerItem}
            >
              <PaperText>Profile</PaperText>
            </TouchableOpacity>
          </Drawer.Section>
        </View>
      </Animated.View>

      <TouchableOpacity
        onPress={toggleDrawer}
        style={styles.menuIcon}
      >
        <Text>{isDrawerOpen ? 'Close' : 'Open'}</Text>
      </TouchableOpacity>

      <View style={styles.mainContent}>
        <Text style={styles.heading}>Home Screen</Text>
        {/* Your Home Screen Content Goes Here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  drawer: {
    width: 250,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    elevation: 16,
    zIndex: 2,
  },
  drawerContent: {
    flex: 1,
    padding: 16,
  },
  userInfoSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  drawerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 2,
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default HomeScreen;
