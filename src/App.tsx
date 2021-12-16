import { Switch, Route } from 'react-router-dom';
import HomePage from 'src/pages/HomePage';
import CartPage from 'src/pages/CartPage';
import CallbackPage from 'src/pages/CallbackPage';
import LogoutPage from './pages/LogoutPage';

import 'antd/dist/antd.less';
import './App.css';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path='/cart' component={CartPage} />
      <Route path='/callback' component={CallbackPage} />
      <Route path='/logout' component={LogoutPage} />
      <Route path='/' component={HomePage} />
    </Switch>
  );
};

export default App;
