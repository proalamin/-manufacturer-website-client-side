import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Sheard/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import SignUp from './Pages/Login/SignUp';
import Reviews from './Pages/Home/Reviews';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import AddReviews from './Pages/AddReviews/AddReviews';
import AllReviews from './Pages/Home/AllReviews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/part/:partId' element={
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        }></Route>
        <Route path='reviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='addReviews' element={<AddReviews></AddReviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
