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
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ProductList from './pages/ProductList/ProductList';
import Blog from './pages/Blog/Blog';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import PaymentByMomo from './pages/PaymentByMomo/PaymentByMomo';
import SearchResult from './pages/SearchResult/SearchResult';
import AuthorizationManagement from './pages/AuthorizationManagement/AuthorizationManagement';
import UserDetail from './pages/UserManagement/UserDetail';
import UserOrderHistory from './pages/UserOrderHistory/UserOrderHistory';
import UserOrderPending from './pages/UserOrderPending/UserOrderPending';
import DeliveryManagement from './pages/DeliveryManagement/DeliveryManagement';
import ManagerProfile from './pages/ManagerProfile/ManagerProfile';
import ProductDetailManagement from './pages/InventoryManagement/ProductDetailManagement';
import CustomerManagement from './pages/CustomerManagement/CustomerManagement';
import CustomerDetailManagement from './pages/CustomerManagement/CustomerDetailManagement';
import ShipperDetailManagement from './pages/ShipperManagement/ShipperDetailManagement';
import AllUserOrder from './pages/AllUserOrder/AllUserOrder';
import UploadPractice from './pages/UploadPractice/UploadPractice';
import AuthorizationManagementTabPane from './pages/AuthorizationManagement/AuthorizationManagementTabPane';
import ImportSheet from './pages/InventoryManagement/ImportGoods/ImportSheet';
import ImportGoodsDetail from './pages/InventoryManagement/ImportGoods/ImportGoodsDetail';
import ExportSheet from './pages/InventoryManagement/ExportGoods/ExportSheet';
import ExportGoodsDetail from './pages/InventoryManagement/ExportGoods/ExportGoodsDetail';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import MultipleRow from './components/MultipleRows/MultipleRow';
import AllBestSellerProductsInHomepageInWeek from './pages/Homepage/AllBestSellerProductsInHomepageInWeek/AllBestSellerProductsInHomepageInWeek';




export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/productlist/best-sellers" component={AllBestSellerProductsInHomepageInWeek} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout/:orderId" component={Checkout} />
        <Route exact path="/payment/:orderId" component={PaymentMethod} />
        <Route exact path="/paymentByMomo/:orderId" component={PaymentByMomo} />
        <Route exact path="/inventorymanagement" component={InventoryManagement} />
        <Route exact path="/importsheet" component={ImportSheet} />
        <Route exact path="/importgoodsdetail/:formId" component={ImportGoodsDetail} />
        <Route exact path="/exportsheet" component={ExportSheet} />
        <Route exact path="/exportgoodsdetail/:formId" component={ExportGoodsDetail} />
        {/* <Route exact path="/inventorymanagement" component={InventoryManagementTabPane} /> */}
        <Route exact path="/productdetailmanagement/:sku" component={ProductDetailManagement} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/ordermanagement" component={OrderManagement} />
        {/* <Route exact path="/orderpicking/:orderId" component={OrderPicking} /> */}
        <Route exact path="/product/:categoryId/:id" component={ProductDetail} />
        <Route exact path="/productlist/:id" component={ProductList} />
        {/* <Route exact path="/purchasehistory" component={PurchaseHistory} /> */}
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/searchresult/:keyWord" component={SearchResult} />
        <Route exact path="/revenuemanagement" component={RevenueManagement} />
        <Route exact path="/shippermanagement" component={ShipperManagement} />
        <Route exact path="/emailverification/:verificationCode" component={EmailVerification} />
        {/* <Route exact path="/revenuemanagement" component={RevenueManagement} /> */}
        {/* <Route exact path="/shippermanagement" component={ShipperManagement} /> */}
        {/* <Route exact path="/deliverymanagement" component={DeliveryManagement} /> */}
        <Route exact path="/usermanagement" component={UserManagement} />
        {/* <Route exact path="/customermanagement" component={CustomerManagement} /> */}
        {/* <Route exact path="/customerdetailmanagement" component={CustomerDetailManagement} /> */}
        {/* <Route exact path="/shipperdetailmanagement" component={ShipperDetailManagement} /> */}
        <Route exact path="/userdetail/:userId" component={UserDetail} />
        {/* <Route exact path="/authorizationmanagement" component={AuthorizationManagement} /> */}
        {/* <Route exact path="/authorizationmanagement" component={AuthorizationManagementTabPane} /> */}
        <Route exact path="/userprofile/:userId" component={UserProfile} />
        <Route exact path="/managerprofile/:userId" component={ManagerProfile} />
        <Route exact path="/usersuccessfulorder/:userId" component={UserOrderHistory} />
        <Route exact path="/userorderpending/:userId" component={UserOrderPending} />
        <Route exact path="/alluserorder/:userId" component={AllUserOrder} />
        <Route exact path="/multiplerow" component={MultipleRow} />
        {/* <Route exact path="/uploadpractice" component={UploadPractice} /> */}
        <Route exact path="*" component={PageNotFound} />
      </Switch >
    </Router >
  );
}

export default App;
