import 'antd/dist/antd.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage/Homepage';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Checkout from './pages/Checkout/Checkout';
import InventoryManagement from './pages/InventoryManagement/InventoryManagement';
import Login from './pages/Login/Login';
import OrderManagement from './pages/OrderManagement/OrderManagement';
import OrderPicking from './pages/OrderPicking/OrderPicking';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import PurchaseHistory from './pages/PurchaseHistory/PurchaseHistory';
import Register from './pages/Register/Register';
import RevenueManagement from './pages/RevenueManagement/RevenueManagement';
import ShipperManagement from './pages/ShipperManagement/ShipperManagement';
import UserManagement from './pages/UserManagement/UserManagement';
import UserProfile from './pages/UserProfile/UserProfile';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout/:orderId" component={Checkout} />
        <Route exact path="/inventorymanagement" component={InventoryManagement} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ordermanagement" component={OrderManagement} />
        <Route exact path="/orderpicking/:orderId" component={OrderPicking} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/purchasehistory" component={PurchaseHistory} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/revenuemanagement" component={RevenueManagement} />
        <Route exact path="/shippermanagement" component={ShipperManagement} />
        <Route exact path="/usermanagement" component={UserManagement} />
        <Route exact path="/userprofile/:userId" component={UserProfile} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
