import { Route, Redirect } from "react-router-dom";
import { useAuthenticatedUser, useIsAuthenticated } from "../utils/auth";
import React from 'react';

const GuestRoute = ({ component: Component, children, redirectTo = "/", ...props }) => {

    let isAuth = useIsAuthenticated();
    (isAuth === undefined) ? isAuth = false : isAuth = true

    const authUser = useAuthenticatedUser()
    console.log("isAuth? ", isAuth)
    console.log("authUser: ", authUser)

    const render = ({ location }) => (
        isAuth
        
            ? <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
            
            : (Component ? <Component /> : children)
    );

    return (
        <Route
          {...props}
          render={render}
        />
    );

}

export default GuestRoute;