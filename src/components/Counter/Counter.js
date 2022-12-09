import "./Counter.scss";
import { counterActions } from "../store/counter"
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      { show && <div className="value">{counter}</div>} 
      <div>
        <button onClick={incrementHandler}>İnc</button>
        <button onClick={increaseHandler}>İnc by 5</button>
        <button onClick={decrementHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
