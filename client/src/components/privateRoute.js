import { Outlet, Navigate } from "react-router-dom"; //untuk render child route

//create component 
const PrivateRoute = () => { 
    const isSignIn = false 

    return ( 
        isSignIn ? <Outlet /> : <Navigate to="/" />
    )

}

export default PrivateRoute