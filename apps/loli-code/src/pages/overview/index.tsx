import CommentList from './comments-list';
import styles from './index.module.css';

const Overview = () => {
  return (
    <div className={styles['page-wrapper']}>
      <CommentList></CommentList>
    </div>
  );
};

export default Overview;
