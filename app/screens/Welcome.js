import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';

function Welcome(props) {
  return (
    <View style={styles.container}>
      <Text>Hello welocme to Abhav Payment App</Text>
      <Text>
        This is a live payment app where you can select the amount you want to
        pay.
      </Text>
      <Image style={styles.img} source={require('../assets/wl.jpg')} />
      <Button
        title="Go to Payments"
        onPress={() => props.navigation.navigate('Pay')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

export default Welcome;
