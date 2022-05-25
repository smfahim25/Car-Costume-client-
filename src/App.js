
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import RequireAuth from './components/pages/Login/RequireAuth';
import SignUp from './components/pages/Login/SignUp';
import NotFound from './components/pages/NotFound/NotFound';
import Purchase from './components/pages/Purchase/Purchase';
import Reviews from './components/pages/Reviews/Reviews';
import Navbar from './components/pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='review' element={<Reviews></Reviews>}></Route>
        <Route path='purchase' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
