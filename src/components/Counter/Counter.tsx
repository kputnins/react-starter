import { FunctionComponent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  resetCounter,
} from '../../store';
import { DataTestId } from '../../test';

import classes from './Counter.module.scss';

export const LABELS = {
  incrementByOne: 'Increment by 1',
  decrementByOne: 'Decrement by 1',
  incrementByFourTwenty: 'Increment by 420',
  decrementBySixtyNine: 'Decrement by 69',
  reset: 'Reset',
};

const Counter: FunctionComponent = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h2 data-testid={DataTestId.COUNT}>{value}</h2>
      <button className={classes.Counter} onClick={() => dispatch(increment())}>
        {LABELS.incrementByOne}
      </button>
      <button className={classes.Counter} onClick={() => dispatch(decrement())}>
        {LABELS.decrementByOne}
      </button>
      <button
        className={classes.Counter}
        onClick={() => dispatch(incrementByAmount(420))}
      >
        {LABELS.incrementByFourTwenty}
      </button>
      <button
        className={classes.Counter}
        onClick={() => dispatch(incrementByAmount(-69))}
      >
        {LABELS.decrementBySixtyNine}
      </button>
      <button
        className={classes.Counter}
        onClick={() => dispatch(resetCounter())}
      >
        {LABELS.reset}
      </button>
    </>
  );
};

export default Counter;
