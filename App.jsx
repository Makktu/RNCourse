import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const incrementCount = () => {
    if (count + 1 <= 10) {
      setCount(count + 1);
      setMessage('');
    } else {
      setMessage("Can't go above 10");
    }
  };
  const decrementCount = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
      setMessage('');
    } else {
      setMessage("Can't go below 0");
    }
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Hello Counter</Text>
      <Text style={styles.textStyle}>{count}</Text>
      {message ? (
        <Text style={{ color: 'dodgerblue', fontSize: 14 }}>{message}</Text>
      ) : (
        <Text style={{ color: 'dodgerblue', fontSize: 14 }}>
          Click + or - to change the Count
        </Text>
      )}
      <Button textContent='+' action={incrementCount} />
      <Button textContent='-' action={decrementCount} btnColor='red' />
      <Button textContent='Reset' action={resetCount} btnColor='black' />

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121111',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'orangered',
  },
  textStyle: {
    color: 'orangered',
    fontSize: 80,
  },
  headerStyle: {
    color: 'white',
    fontSize: 56,
    marginBottom: 60,
  },
});
