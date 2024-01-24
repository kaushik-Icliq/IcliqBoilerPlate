import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from './src/navigators/StackNavigation';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
