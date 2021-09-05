import { FunctionComponent, useState } from "react";

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default Counter;
