import { useState } from "react";
import { Button } from 'antd';

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="counter">
      <h1 className="title">Counter</h1>
      <h2>{counter}</h2>
      <div className="button-wrapper">
        <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
        <Button onClick={() => setCounter(0)}>Reset</Button>
      </div>
      <Button href="/employees">Employee page</Button>
    </div>
  );
};

export default Counter;