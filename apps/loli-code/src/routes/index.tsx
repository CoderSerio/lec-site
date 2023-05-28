import Overview from '../pages/overview';
import Topics from '../pages/topics';
import TopicDetail from '../pages/topic-detail';

interface IRoute {
  name: string;
  path: string;
  component: JSX.Element;
  showInSidebar: boolean;
}

export const routes: Array<IRoute> = [
  {
    name: '首页',
    path: '/',
    component: <Overview />,
    showInSidebar: true,
  },
  {
    name: '题库',
    path: '/topics',
    component: <Topics />,
    showInSidebar: true,
  },
  {
    name: '题目详情',
    path: '/topic-detail',
    component: <TopicDetail />,
    showInSidebar: true,
  },
  {
    name: '404',
    path: '*',
    component: <Overview />,
    showInSidebar: false,
  },
  // {
  //   name: '个人信息',
  //   path: '/personal',
  //   component: <InfoDoc />,
  // },
];
