import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import {useNavigate} from 'react-router-dom';

import LandingPage from './pages/landing-page'
import SignIn from './pages/signIn'
import SignUp from './pages/signup'
import HomePage from './pages/HomePage'
import Subscribe from './pages/Subscribe'
import Profile from './pages/profile'
import ReadBook from './pages/ReadBook';
import ReadBookFirst from './pages/ReadBookFirst';
import Transaction from './pages/Transaction'
import FormAddBook from './pages/FormAddBook';

import { API, setAuthToken } from "./config/api";

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
// const RoleAdmin = () => {
//   let navigate = useNavigate();
//   navigate("/subscribe-page")
// };
// const RoleCustomer = () => {
//   let navigate = useNavigate();
//   navigate("/home-page")
// };
// const RoleFalse = ()=>{ 
//   let navigate = useNavigate();
//   navigate("/")
// }

function App() {
  let navigate = useNavigate(); 

  const [state, dispatch] = useContext(UserContext);
  // console.clear();
  // console.log(state);


   useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (!state.isLogin) {
      navigate("/");
    } else {
      if (state.user.role === "admin") {
        navigate("/transaction");
      } else if (state.user.role === "customer") {
        navigate("/home-page");
      }
    }
  }, [state]);
  // console.log(state);


  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 400) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      // console.log(response)

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;
      
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      // console.log(payload)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/sigin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/home-page' element={<HomePage />} />
        <Route exact path='/subscribe-page' element={<Subscribe />} />
        <Route exact path='/read-book' element={<ReadBook />} />
        <Route exact path='/read-book-first' element={<ReadBookFirst />} />
        <Route exact path='/transaction' element={<Transaction />} />
        <Route exact path='/add-book' element={<FormAddBook />} />
      </Routes>

  );
}

export default App;
