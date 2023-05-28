import { List } from '@arco-design/web-react';
import styles from '../index.module.css';

const CommentList = () => {
  return (
    <div className={styles['list-wrapper']}>
      <List
        style={{ width: '100%' }}
        size="small"
        header="这是题解之类的东西："
        dataSource={[
          'Beijing Bytedance Technology Co., Ltd.',
          'Bytedance Technology Co., Ltd.',
          'Beijing Toutiao Technology Co., Ltd.',
          'Beijing Volcengine Technology Co., Ltd.',
          'China Beijing Bytedance Technology Co., Ltd.',
        ]}
        render={(item, index) => <List.Item key={index}>{item}</List.Item>}
      />
    </div>
  );
};

export default CommentList;
