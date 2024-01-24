import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {logout} from '../../redux/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';

export default function Home() {
  const {loading, authData} = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text>{authData?.email}</Text>
      <Text>{authData?.password}</Text>
      <CustomButton
        title="LogOut"
        onPress={() => dispatch(logout())}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
