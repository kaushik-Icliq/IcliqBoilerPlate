import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {loggedIn} = useSelector(state => state.UserReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!loggedIn ? (
          <Stack.Screen name={'Login'} component={Login} />
        ) : (
          <Stack.Screen name={'Home'} component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
