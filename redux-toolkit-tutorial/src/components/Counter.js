import React, { useState } from 'react';
import styles from '../styles/Counter.module.css';

export default function Counter(props) {
  const { count, setCount, incrementAmount, setIncrementAmount } = props;

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => setCount(count + incrementValue)}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
