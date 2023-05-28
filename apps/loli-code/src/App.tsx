import styles from './app.module.css';
import { Menu } from '@arco-design/web-react';
import { Link, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className={styles.app}>
      {/* 侧边栏 */}
      <div className={styles.sidebar}>
        <Menu className={styles.menu}>
          {routes.map((route, index) =>
            route.showInSidebar ? (
              <Menu.Item key={`${index}`}>
                <Link className={styles.link} to={route.path}>
                  {route.name}
                </Link>
              </Menu.Item>
            ) : null,
          )}
        </Menu>
      </div>

      {/* 页面内容主体 */}
      <div className={styles.content}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component}>
              {route.name}
            </Route>
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
