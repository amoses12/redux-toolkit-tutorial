import React from 'react';
import styles from '../styles/CounterDisplay.module.css';

export default function CounterDisplay(props) {
  const { count } = props;
  return (
    <div className={styles.row}>
      <p className={styles.value}>{count}</p>
    </div>
  );
}
