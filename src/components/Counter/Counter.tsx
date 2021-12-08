import { FunctionComponent, useState } from 'react';

import classes from './Counter.module.scss';

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const handleCounterClick = () => setCount((currentCount) => currentCount + 1);

  return (
    <button className={classes.Counter} onClick={handleCounterClick}>
      Count {count}
    </button>
  );
};

export default Counter;
