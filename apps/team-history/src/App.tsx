import styles from './app.module.css';
import { Link, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className={styles.App}>
      <header>
        {routes.map((route) => (
          <Link to={route.path}>|{route.name}|</Link>
        ))}
      </header>
      <div>
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
