import { Table } from '@arco-design/web-react';
import { columns, data } from './config';
import styles from './index.module.css';

const Topics = () => {
  return (
    <div className={styles['page-wrapper']}>
      <Table className={styles.table} columns={columns} data={data} />;
    </div>
  );
};

export default Topics;
