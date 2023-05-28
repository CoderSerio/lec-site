import Overview from '../pages/overview';
import InfoDoc from '../pages/info-doc';

interface IRoute {
  name: string;
  path: string;
  component: JSX.Element;
}

export const routes: Array<IRoute> = [
  {
    name: '总览',
    path: '/',
    component: <Overview />,
  },
  {
    name: '人员档案详情',
    path: '/info-doc',
    component: <InfoDoc />,
  },
];
