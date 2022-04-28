import { Nav, Col,Container, Card, Image, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCoffee, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import React from 'react'
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import Subscribe from "./Subscribe";
import { UserContext } from "../context/userContext";



import WOW from '../images/WOW_Logo.png';
import profile from '../images/profile.png';
import {API} from '../config/api'

const element =  { 
   cofee: <FontAwesomeIcon icon={faCoffee} />, 
   user : <FontAwesomeIcon icon={faUser} />,  
   list : <FontAwesomeIcon icon={faList} />,  
   logout : <FontAwesomeIcon icon={faRightFromBracket} />, 

}

export default function Navbar() {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate(); 

//GET USER
  const [user, setUser] = useState([]); 
  const getUserId = async ()=> { 
      try {
          const responseUser = await API.get("/user")
          if(!responseUser) { 
            setUser({ 
              name : "Firmansya Filayuda", 
            })
          }
          else { 
            setUser(responseUser.data.data.user.data)
          }
          console.log(responseUser.data.data.user.data)

          // const responTransaction = responseUser.data.data.user.data.transactions
          // console.log(responseUser.data.data.user.data.transactions)
          // if(responTransaction.length === "0" ) { 
          //   console.log("OK")
          // }else {console.log("Salah")}

          // console.log(responTransaction)
          // if(responseUser.data.data.user.data.transactions[0] == null) { 
          //   setUser({
          //     subscribe : "Not Subscribe"
          //   })
          // } else { 
          //   setUser({
          //     subscribe : "Subscribe"
          //   })
          // }
          // console.log(setUser)
          // console.log(user)
      } catch (error) {
          console.log(error)
      }
  }
  useEffect( ()=>{ 
      getUserId(); 
  }, []) ;

  console.log(user); 
  // console.log(user.transactions[0].userStatus); 
  // console.log(user.transactions[0]); 
  // if(user.transactions[0].userStatus === null) { 
  //   console.log("Don't Worry") 
  // }else { 
  //   console.log(user.transactions[0].userStatus); 
  // }

    const handleSubscribe = () => { 
        navigate("/subscribe-page"); 
      }; 

    // const {subscribe} = props
    // const [profileState, setProfileState] = useState(props)
    // useEffect(() => {
    //     setProfileState(props);
    //   }, [props]);
    
      const [show, setShow] = useState(); 

      const logout = () => { 
        console.log(state);
        dispatch({ 
          type : "LOGOUT", 
        }); 
        navigate("/")
      } ; 

      // const [test, setSubscribe] = useState([]) ; 
      // const getSubscribe = async ()=>{ 
      //   try {
      //     const resSubscribe = await API.get("/transaction")
      //     setSubscribe(resSubscribe.data.data.transaction) ; 

      //     console.log(resSubscribe)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      // setSubscribe( ()=>{ 
      //   getSubscribe(); 
      // }, []);

  // console.log(user.transactions[0].userStatus); 

      // const [test, setTest] = useState({
      //   if(user.transactions)
      //   name : "Not Subscribe", 
      // }); 



      // const set = ()=>{ 
      //   setTest({
      //     name : "berhasil"
      //   })
      // }



  return (
    <div className="col-3 p-4">
        <img src={WOW} className="img-fluid mx-auto d-block mb-4" alt="logo" style={{width:"35%",padding:"0px", transform: "rotate(-15deg)" }}/>
        <img src={profile} className="img-fluid mx-auto d-block mb-3" alt="logo" style={{width:"30%",padding:"0px" }} />
        <h5 className="fw-bold text-center">{user.name}</h5>
        {/* <h5 className="fw-bold text-center">{user.transactionss.userStatus}</h5> */}
        <p className="text-center"><a href="#" className="fw-bold small" style={{ color:"green", textDecoration:"none" }}>
            {/* {test.name ? "hai" : "test"} */}
          Subscribe
        </a></p>
        <hr style={{ width:"80%"}} className="mx-auto d-block mb-5 mt-4" />
        <Col sm={12}  >
            <Link to='/profile'  style={{ textDecoration:"none", color:"grey", fontSize:"20px" }}> <p className="mb-5 text-center"><small className="me-3">{element.user}</small>  Profile</p></Link>
            
           {/* <p onClick={getUser} className="mb-5 text-center"><small className="me-3">{element.user}</small>  Profile</p> */}

        {/* {profileState.isLogin ? (
            <Link to='/subscribe-page'  style={{ textDecoration:"none", color:"grey", fontSize:"20px" }}> <p className="mb-5 text-center"><small className="me-3">{element.list}</small>  Subscribe</p></Link>
        ) : "test"} */}

            <Link to='/subscribe-page'  style={{ textDecoration:"none", color:"grey", fontSize:"20px" }}> <p className="mb-5 text-center"><small className="me-3">{element.list}</small>  Subscribe</p></Link>

            <hr style={{ width:"80%"}} className="mx-auto d-block mb-4 " />
            <p onClick={logout} className="mb-4 text-center" style={{ textDecoration:"none", color:"grey", fontSize:"20px" }}><small className="me-3">{element.logout}</small>Logout</p>
        </Col>

    </div>
  )
}
