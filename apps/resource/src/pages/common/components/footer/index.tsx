import { Space } from '@arco-design/web-react';
import { footerFiles } from '../../files';
import GroupWrapper from '../group-wrapper';
import styles from './index.module.css';
import File from '../file';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <GroupWrapper>
        {footerFiles.map((file) => {
          return <File name={file.name} url={file.url}></File>;
        })}
      </GroupWrapper>
    </div>
  );
};

export default Footer;
