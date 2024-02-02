import {StyleSheet, Text, View, Image} from 'react-native';
import {Height} from '../../utils/responsive';
import { arrow, burger_icon, more, search_icon } from '../../contants';

const AppBarItem = ({title}) => {
  return (
    <View
      style={{
        height: Height(56),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        justifyContent: 'flex-start',
        elevation: 5,
        paddingHorizontal: 16,
      }}>
        <Image source={burger_icon} style={{
          height: 32, 
          width: 32,
          tintColor: '#FFFFFF'

        }}/>
      <Text
        style={{
          fontSize: Height(24),
          fontWeight: '600',
          color: '#FFF',
          marginHorizontal: 32
        }}>
        {title}
      </Text>
   
    </View>
  );
};

export default AppBarItem;

const styles = StyleSheet.create({});
