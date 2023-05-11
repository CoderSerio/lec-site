import { Nav, Avatar, Dropdown } from '@douyinfe/semi-ui';

const items = [
  { itemKey: 'home', text: '首页', link: '/' },
  { itemKey: 'test', text: '开发测试页面', link: '/about' },
  { itemKey: 'team-history', text: '团队历史', link: '/team-history' },
];

const CommonHeader = () => {
  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        onSelect={(key) => console.log(key)}
        header={{
          text: '乐程 LEC',
        }}
        items={items}
        footer={
          <Dropdown
            position="bottomRight"
            render={
              <Dropdown.Menu>
                <Dropdown.Item>详情</Dropdown.Item>
                <Dropdown.Item>退出</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Avatar size="small" color="light-blue" style={{ margin: 4 }}>
              BD
            </Avatar>
            <span>Bytedancer</span>
          </Dropdown>
        }
      />
    </div>
  );
};

export default CommonHeader;
