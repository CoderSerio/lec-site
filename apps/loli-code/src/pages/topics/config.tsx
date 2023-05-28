import { Button, TableColumnProps } from '@arco-design/web-react';
import { Route, useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  path: string;
}

const NavigateButton = ({ path }: NavigateButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/topic-detail')} type="primary">
      查看详情
    </Button>
  );
};

export const columns: TableColumnProps[] = [
  {
    title: '题目名',
    dataIndex: 'name',
  },
  {
    title: '难度',
    dataIndex: 'difficulty',
  },
  {
    title: '通过率',
    dataIndex: 'acRate',
  },
  {
    title: '来源',
    dataIndex: 'origin',
  },
  {
    title: '状态',
    dataIndex: 'isAc',
  },
  {
    title: '',
    dataIndex: 'operations',
    render: (_, record) => {
      return <NavigateButton path={'/'} />;
    },
  },
];

export const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
];
