import styles from './index.module.css';
import Search from './search';
import { Calendar, Grid } from '@arco-design/web-react';
import GroupWrapper from '../common/components/group-wrapper';
const Row = Grid.Row;
const Col = Grid.Col;

const Home = () => {
  return (
    <div className={styles['page-wrapper']}>
      <Row>
        <Col span={10} offset={6}>
          <Search></Search>
        </Col>
      </Row>
      {/* <Row>
        <Col span={8}>
          <GroupWrapper>
            <div>123</div>
          </GroupWrapper>
        </Col>
      </Row> */}
    </div>
  );
};

export default Home;
