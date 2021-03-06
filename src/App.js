
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './components/pages/Blogs/Blogs';
import AddProduct from './components/pages/Dashboard/AddProduct';
import AddReview from './components/pages/Dashboard/AddReview';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ManageAllProducts from './components/pages/Dashboard/ManageAllProducts';
import ManageProduct from './components/pages/Dashboard/ManageProduct';
import MyOrders from './components/pages/Dashboard/MyOrders';
import MyProfile from './components/pages/Dashboard/MyProfile';
import Payment from './components/pages/Dashboard/Payment';
import Users from './components/pages/Dashboard/Users';
import Contact from './components/pages/Home/Contact';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import RequireAdmin from './components/pages/Login/RequireAdmin';
import RequireAuth from './components/pages/Login/RequireAuth';
import Signup from './components/pages/Login/SignUp';
// import SignUp from './components/pages/Login/SignUp';
import NotFound from './components/pages/NotFound/NotFound';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Purchase from './components/pages/Purchase/Purchase';
import Reviews from './components/pages/Reviews/Reviews';
import Navbar from './components/pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/purchase/:purchaseID' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route index path='myorders' element={<MyOrders />}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageallproducts' element={<RequireAdmin><ManageAllProducts></ManageAllProducts></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
