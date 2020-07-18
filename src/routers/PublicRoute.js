/* Libs Class */
import React from "react";
import { Route } from "react-router-dom";


const PublicRoute = ({ component: RouteComponent, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps => (
                    <RouteComponent {...routeProps} />
                )
            }
        />
    );
};

export default PublicRoute;