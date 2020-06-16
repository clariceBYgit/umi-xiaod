import React from 'react';
import styles from './_layout.css';

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page users/_layout</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
}
