import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(actions.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(actions.increment());
  };
  const decrementHandler = () => {
    dispatch(actions.decrement());
  };
  const increaseHandler = () => {
    dispatch(actions.increase(5));
  };
  const counter = useSelector((state) => {
    return state.counterReducer.counter;
  });
  const show = useSelector((state) => state.counterReducer.show);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
