import { Space, Typography } from '@arco-design/web-react';
import styles from '../index.module.css';
const { Title, Paragraph, Text } = Typography;

const Description = () => {
  return (
    <div className={styles['description']}>
      <Title heading={2}>一个奇妙的问题</Title>
      <Space direction="vertical">
        <div>
          <Title heading={3}>题目描述</Title>
          <Paragraph>阿布阿巴</Paragraph>
        </div>

        <div>
          <Title heading={3}>输入格式</Title>
          <Paragraph>阿布阿巴</Paragraph>
        </div>

        <div>
          <Title heading={3}>输出格式</Title>
          <Paragraph>阿布阿巴</Paragraph>
        </div>

        <div>
          <Title heading={3}>输入样例</Title>
          <Paragraph>
            <Text>aaaa bbbb</Text>
          </Paragraph>
        </div>

        <div>
          <Title heading={2}>输出样例</Title>
          <Paragraph>
            <Text>aaaa bbbb</Text>
          </Paragraph>
        </div>
      </Space>
    </div>
  );
};

export default Description;
