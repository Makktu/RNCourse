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
