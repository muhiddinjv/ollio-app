import {StyleSheet, Text, View, Image} from 'react-native';
import {Height} from '../../utils/responsive';
import { arrow, search_icon } from '../../contants/icons';
import { IBase } from '../../utils/interfaces';

const AppBarUniversal = ({title}:IBase) => {
  return (
    <View
      style={{
        height: Height(56),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        justifyContent: 'space-between',
        elevation: 5,
        width: '100%',
        paddingHorizontal: 8,
      }}>
        <Image source={arrow} style={{
          height: 36, 
          width: 36,
          tintColor: '#FFFFFF'

        }}/>
      <Text
        style={{
          fontSize: Height(24),
          fontWeight: '600',
          color: '#FFF',
        }}>
        {title}
      </Text>
      <Image source={search_icon} style={{
          height: 36, 
          width: 36,
          tintColor: '#FFFFFF'

        }}/>
    </View>
  );
};

export default AppBarUniversal;

const styles = StyleSheet.create({});
