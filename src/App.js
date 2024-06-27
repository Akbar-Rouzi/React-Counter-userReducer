import { useReducer } from "react";
import { counterReducer } from "./store/counterReducer";

function App() {
  const [counterState, dispatchCounterAction ] = useReducer(
    counterReducer,
    {
      count: 0
    }
  )
  const handleIncrement = () => {
    dispatchCounterAction({
      type: "INCREMENT"
    })
  };
  const handleDecrement = () => {
    dispatchCounterAction({
      type: "DECREMENT"
    })
  };
  const handleReset = () => {
    dispatchCounterAction({
      type: "RESET"
    })
  };
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
