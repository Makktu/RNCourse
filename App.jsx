import { useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';

let initialState = {
  count: 0,
  message: 'Click + or - to change the count',
};

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      if (state + 1 <= 10) {
        return { ...state, count: count + 1 };
      } else return 10;
    case 'decrement':
      if (state - 1 >= 0) {
        return { ...state, count: count - 1 };
      } else return 0;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Hello Counter</Text>
      <Text style={styles.textStyle}>{state.count}</Text>
      <Text style={{ color: 'dodgerblue', fontSize: 22 }}>{state.message}</Text>

      <Button
        textContent='+'
        action={() => {
          dispatch('increment');
          // console.log(state.count);
        }}
      />
      <Button
        textContent='-'
        action={() => dispatch('decrement')}
        btnColor='red'
      />
      <Button
        textContent='RESET'
        action={() => dispatch('reset')}
        btnColor='black'
      />
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
