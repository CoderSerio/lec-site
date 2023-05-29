import '@arco-design/web-react/dist/css/arco.css';
import { Carousel } from '@arco-design/web-react';
import Home from './pages/home';
import OpenSource from './pages/open-source';
import Footer from './pages/common/components/footer';
import styles from './app.module.css';

const App = () => {
  return (
    <div id="app-wrapper">
      <Carousel className="app-carousel" indicatorType="never">
        <div key={0}>
          <Home></Home>
        </div>
        <div key={1}>
          <OpenSource></OpenSource>
        </div>
      </Carousel>
      <div className={styles.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
