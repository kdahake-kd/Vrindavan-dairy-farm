import {Route, Routes} from 'react-router-dom'

//assests
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//website
import Header  from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Categories from "./components/categories";
import AllProducts from './components/allproducts';
import ProductDetails  from './components/productdetails';
import Checkout  from './components/checkout';
import CategoryProducts from "./components/categoryproducts";
import OrderSuccess from "./components/ordersuccess";
import OrderFail from "./components/orderfail";



//customer panel
import Register from './components/customer/register';
import Login from './components/customer/login';
import Customer_logout from './components/customer/Customer_logout';

import Dashboard from './components/customer/dashboard';
import Orders from './components/customer/orders';
import Wishlist from './components/customer/wishlist';
import Profile from './components/customer/profile';
import ChangePassword from './components/customer/changepassword';
import Addresslist from './components/customer/addresslist';
import AddAddress from './components/customer/addaddress';


//seller panel

import SellerRegister from './components/seller/sellerregister';
import SellerLogin from './components/seller/sellerlogin';
import SellerDashboard from './components/seller/sellerdashboard';
import SellerProducts from './components/seller/sellerproducts';
import AddProduct from './components/seller/addproduct';
import VendorOrders from './components/seller/vendororders';
import Customers from './components/seller/customers';
import Reports from './components/seller/reports';
import VendorProfile from './components/seller/vendorprofile';
import VendorChangePassword from './components/seller/vendorchangepassword';
import { About } from './components/customer/About';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/> 
      <Route path='/products' element={<AllProducts/>}/> 

      <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>  
      <Route path='/product/:product_slug/:product_id' element={<ProductDetails/>}/>  
      <Route path="/about" element={<About />} />

      <Route path='/checkout' element={<Checkout/>}/> 
      <Route path='/order/success' element={<OrderSuccess/>}/> 
      <Route path='/order/fail' element={<OrderFail/>}/> 


   {/* Customer panel */}
      <Route path='/customer/register' element={<Register/>}/> 
      <Route path='/customer/login' element={<Login/>}/> 
      <Route path='/customer/logout' element={<Customer_logout/>}/> 

      <Route path='/customer/dashboard' element={<Dashboard/>}/> 
      <Route path='/customer/orders' element={<Orders/>}/> 
      <Route path='/customer/wishlist' element={<Wishlist/>}/> 
      <Route path='/customer/profile' element={<Profile/>}/> 
      <Route path='/customer/change-password' element={<ChangePassword/>}/> 
      <Route path='/customer/addressess' element={<Addresslist/>}/> 
      <Route path='/customer/add-address' element={<AddAddress/>}/> 


      {/* seller panel */}
      <Route path='/seller/register' element={<SellerRegister/>}/> 
      <Route path='/seller/login' element={<SellerLogin/>}/> 
      <Route path='/seller/dashboard' element={<SellerDashboard/>}/> 
      <Route path='/seller/products' element={<SellerProducts/>}/> 
      <Route path='/seller/add-product' element={<AddProduct/>}/> 
      <Route path='/seller/orders' element={<VendorOrders/>}/> 
      <Route path='/seller/customers' element={<Customers/>}/> 
      <Route path='/seller/reports' element={<Reports/>}/> 
      <Route path='/seller/profile' element={<VendorProfile/>}/> 
      <Route path='/seller/change-password' element={<VendorChangePassword/>}/> 



    </Routes>
   
    <Footer/>
    </>
  );
}

export default App;
