import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import TeamHistory from './team-history';
import { Layout } from '@douyinfe/semi-ui';
import CommonHeader from '../components/common-header';
import CommonFooter from '../components/common-footer';

import styles from './index.module.css';

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header>
            <CommonHeader></CommonHeader>
          </Header>

          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team-history" element={<TeamHistory />} />
            </Routes>
          </Content>

          <Footer>
            <CommonFooter></CommonFooter>
          </Footer>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
