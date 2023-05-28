import TopicEditor from './topic-editor';
import Description from './description';
import styles from './index.module.css';

const TopicDetail = () => {
  return (
    <div className={styles['page-wrapper']}>
      <Description></Description>
      <TopicEditor></TopicEditor>
    </div>
  );
};

export default TopicDetail;
