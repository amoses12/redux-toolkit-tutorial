import React, { useState } from 'react';
import Counter from '../../components/Counter';
import CounterDisplay from '../../components/CounterDisplay';

export function CounterContainer() {
  const [count, setCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <>
      <Counter
        count={count}
        setCount={setCount}
        incrementAmount={incrementAmount}
        setIncrementAmount={setIncrementAmount}
      />
      <CounterDisplay count={count} />
    </>
  );
}
