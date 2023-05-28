import CommentList from './comments-list';
import CodeCalender from './code-calendar';

import styles from './index.module.css';

const Overview = () => {
  return (
    <div className={styles['page-wrapper']}>
      <CodeCalender></CodeCalender>
      <CommentList></CommentList>
    </div>
  );
};

export default Overview;
