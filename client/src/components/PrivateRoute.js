import { Route, Redirect } from "react-router-dom";
import { useIsAuthenticated } from "../utils/auth";
import React from 'react';

const PrivateRoute = ({ component: Component, children, redirectTo = "/", ...props }) => {

    let isAuth = useIsAuthenticated();
    // (isAuth === undefined) ? isAuth = false : isAuth = true

    const render = ({ location }) => (
        isAuth
        
            ? (Component ? <Component /> : children)
            
            : <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
    );

    return (
        <Route
          {...props}
          render={render}
        />
    );

}

export default PrivateRoute;