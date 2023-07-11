import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const Button = ({ textContent, action, btnColor = 'green' }) => {
  return (
    <View>
      <Pressable
        style={[styles.buttonStyle, { backgroundColor: btnColor }]}
        onPress={action}
      >
        <Text style={styles.textStyle}>{textContent}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 100,
    backgroundColor: 'darkgreen',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 15,
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
  },
});

export default Button;
