import { FunctionComponent, useState } from 'react';

import classes from './Counter.module.scss';

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className={classes.Counter}
      onClick={() => setCount((currentCount) => currentCount + 1)}
    >
      Count {count}
    </button>
  );
};

export default Counter;
