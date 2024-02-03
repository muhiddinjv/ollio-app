import {StyleSheet, Text, View, Image} from 'react-native';
import {Height} from '../../utils/responsive';
import { arrow, burger_icon, more, more_1, search_icon } from '../../contants/icons';

const AppBarItem = ({title}:any) => {
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
        <Image source={more_1} style={{
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