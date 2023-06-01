import {useContext} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {AuthContent} from "../context/auth.js";

const PrivateRoute = ({redirectPath}: any) => {
  const {user}: userContent.Props = useContext(AuthContent)

  if(!user) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
};

export default PrivateRoute;
