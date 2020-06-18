import React from 'react';
import styles from './index.less';
import {Button} from 'antd';

export default () => {
  return (
    <div className={styles.test}>
      <h1 className={styles.title}>Hello world</h1>
      <Button>Click</Button>
    </div>
  );
}
