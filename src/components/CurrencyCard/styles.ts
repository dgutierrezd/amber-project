import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  gradientView: {
    borderColor: Colors.grayLight,
    borderWidth: 1,
    borderRadius: 20,
    height: 90,
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  nameTitle: {fontSize: 18, fontWeight: '300', color: Colors.white},
  idTitle: {fontSize: 18, fontWeight: '600', color: Colors.white},
  animatedContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.purple,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 24,
    fontWeight: '300',
    color: Colors.white,
  },
});
