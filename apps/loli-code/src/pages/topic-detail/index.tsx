import TopicEditor from './editor';
import styles from './index.module.css';
const TopicDetail = () => {
  return (
    <div className={styles['page-wrapper']}>
      <TopicEditor></TopicEditor>
    </div>
  );
};

export default TopicDetail;
