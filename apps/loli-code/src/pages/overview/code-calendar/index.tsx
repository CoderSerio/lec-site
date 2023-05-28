import { Calendar } from '@arco-design/web-react';

const CodeCalender = () => {
  return (
    <div style={{ width: '80%', height: '50%', overflow: 'auto' }}>
      <div style={{ color: '#fff' }}>这是一个打卡</div>
      <Calendar defaultValue="2020-04-01" />
    </div>
  );
};

export default CodeCalender;
