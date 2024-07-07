import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {StateTypes} from '../../interfaces';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import he from 'he';
import Colors from '../../utils/Colors';
import symbols from '../../utils/currency-symbols.json';
import RatesSkeleton from '../../components/Skeleton/RatesSkeleton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const CurrencyRates = ({route}) => {
  const [ratesValue, setRatesValue] = useState<string[]>([]);
  const [ratesKey, setRatesKey] = useState<string[]>([]);
  const selectedCurrency = useSelector(
    (state: StateTypes) => state.selectedCurrency,
  );
  const currencies = useSelector((state: StateTypes) => state.currencies);
  const loading = useSelector((state: StateTypes) => state.loading);

  const navigation = useNavigation();

  const currencyName = currencies?.find(
    c => c.id === selectedCurrency?.currency,
  )?.name;

  const {id} = route.params;

  useEffect(() => {
    if (selectedCurrency?.rates) {
      setRatesValue(Object.values(selectedCurrency?.rates));

      setRatesKey(Object.keys(selectedCurrency?.rates));
    }
  }, [selectedCurrency]);

  const symbol =
    symbols.find(s => s.abbreviation === selectedCurrency?.currency)?.symbol ||
    '$';

  const isLoading = loading || selectedCurrency?.currency !== id;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.container}>
        {isLoading ? (
          <RatesSkeleton />
        ) : (
          <>
            <View style={styles.rowHeader}>
              <Pressable style={styles.iconPadding} onPress={goBack}>
                <Icon name="arrow-back-outline" size={28} />
              </Pressable>
              <View>
                <Text style={styles.currencyTitle}>
                  {selectedCurrency?.currency}
                </Text>
              </View>
            </View>
            <Text style={styles.nameTitle}>{currencyName}</Text>
            <ScrollView
              style={styles.containerScroll}
              showsVerticalScrollIndicator={false}>
              <Text style={styles.ratesTitle}>Rates</Text>
              {ratesValue?.map((value, index) => (
                <View key={index} style={styles.rateContainer}>
                  <Text style={styles.rateTitle}>{ratesKey[index]}</Text>
                  <Text style={{fontSize: 18}}>
                    {he.decode(symbol)} {Number(value)?.toFixed(2)}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CurrencyRates;
