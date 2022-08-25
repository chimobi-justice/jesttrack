import { useEffect } from 'react';
import './app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import Pages from './routes';

const App = () => {

  useEffect(() => {
    NProgress.configure({ easing: "ease", speed: 500 });
    NProgress.start();
    NProgress.done();
  }, []);

  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
