// https://www.sitepoint.com/react-router-complete-guide/

import React from "react";
import { Redirect, Route, useLocation, Link } from "react-router-dom";
import Auth from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
        <p>kkk{console.log(Auth.isAuthenticated())}</p>
      {Auth.isAuthenticated() === true ?
        <Component />
      :
        <p>You are logged out, please <Link className="p-2 text-dark" to="/login">Login </Link></p>
      }
    </Route>
  );
};

export default PrivateRoute;