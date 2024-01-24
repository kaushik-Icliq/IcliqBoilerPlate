import React from 'react';
import {Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native';
import * as COLORS from '../utils/colors';

const CustomButton = props => {
  const {loading, title, onPress, disabled, style, textStyle} = props;

  return (
    <Pressable
      {...props}
      style={[
        styles.container,
        style,
        {
          backgroundColor: disabled
            ? COLORS.INITIAL_TXTINPUT
            : COLORS.PRIMARY_COLOR,
        },
      ]}
      onPress={onPress}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    marginHorizontal: 24,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});

export default CustomButton;
