import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListSkeleton from '../../components/Skeleton/ListSkeleton';
import {getCurrenciesAction} from '../../redux/actions';
import {StateTypes} from '../../interfaces';
import CurrencyCard from '../../components/CurrencyCard';
import Toast from 'react-native-toast-message';
import {styles} from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const currencies = useSelector((state: StateTypes) => state.currencies);
  const loading = useSelector((state: StateTypes) => state.loading);
  const error = useSelector((state: StateTypes) => state.error);

  useEffect(() => {
    dispatch(getCurrenciesAction());
  }, []);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        props: {text1: error},
      });
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Currencies</Text>
      {loading ? (
        <ListSkeleton />
      ) : (
        <FlatList
          data={currencies}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CurrencyCard {...item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
