import React from 'react';
import styles from './index.module.css';

interface FileProps {
  name: string;
  url?: string;
}

const File = ({ url, name }: FileProps) => {
  return (
    <div className={styles.file} onClick={() => window.open(url)}>
      <div
        className={styles['file-icon']}
        style={{ background: url ? `url(${url})` : '#fff' }}
      ></div>
      <div>{name}</div>
    </div>
  );
};

export default File;
