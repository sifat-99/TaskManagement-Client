import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Spinner } from "@material-tailwind/react";



const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();

    console.log(location.pathname);
if(loading){
    return (
    <>
    <div className="flex justify-center items-center text-9xl mt-20"><span className="loading loading-bars loading-lg"></span></div>
    <h2 className="flex justify-center items-center text-9xl mt-20">Please Wait.....</h2>
    <h1 className="flex items-center justify-center"><Spinner className="h-12 w-12" color="purple" /></h1>
    </>

    ) 
}

    if(user){
        return children;
    }
    else
    {
       return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };