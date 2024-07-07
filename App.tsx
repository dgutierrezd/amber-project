/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';

import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';
import {toastConfig} from './src/components/CustomToast';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrencyRates from './src/screens/CurrencyRates';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const showErrorConnection = () => {
    Toast.show({
      type: 'error',
      props: {
        text1:
          "Oops! It looks like you're offline. Please reconnect to continue.",
      },
    });
  };

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        showErrorConnection();
      }
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        showErrorConnection();
      }
    });
    return unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'fade',
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CurrencyRates" component={CurrencyRates} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
      <Toast position="top" topOffset={60} config={toastConfig} />
    </Provider>
  );
}

export default App;
