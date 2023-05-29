import { Space } from '@arco-design/web-react';
import React from 'react';
import styles from './index.module.css';

interface GrouWrapper {
  children: React.ReactNode;
}

const GroupWrapper = (props: GrouWrapper) => {
  return <div className={styles['group-wrapper']}>{props?.children}</div>;
};

export default GroupWrapper;
