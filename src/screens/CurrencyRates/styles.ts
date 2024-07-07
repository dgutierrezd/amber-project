import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  containerSafeArea: {backgroundColor: Colors.purple, height: '100%'},
  container: {paddingHorizontal: 20, flex: 1},
  rowHeader: {flexDirection: 'row'},
  iconPadding: {padding: 3},
  currencyTitle: {
    fontSize: 26,
    fontWeight: '300',
    marginBottom: 10,
    marginLeft: 10,
  },
  nameTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 10,
  },
  containerScroll: {marginTop: 20},
  ratesTitle: {fontSize: 26, fontWeight: '600', marginBottom: 10},
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  rateTitle: {fontSize: 24},
});
