import {View, Text, StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export interface ButtonPrimaryProps {
  testID?: string,
}

export function ButtonPrimary(props: ButtonPrimaryProps) {

  return (
    <View style={styles.root} testID={props.testID}>
      <Text style={styles.clickMe} testID="144:2127">
        Click Me
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    borderRadius: 100,
    backgroundColor: theme.colors.greenPrimary,
  },
  clickMe: {
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});

