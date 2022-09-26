import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: scale(32),
    color: COLORS.white,
    fontWeight: 'bold',
  },
  inputWrap: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateVerticalScale(44),
  },
});
