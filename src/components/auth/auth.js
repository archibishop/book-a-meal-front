import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('x-access-token')
    return (
        <Route
        {...rest}
        render={
            props=> {
                return token === null ? (<Redirect to='/login' />) : (<Component {...props} />)
            }
        }
        />
    );
};

// export default AuthRoute;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     const token = localStorage.getItem('x-access-token')
//     <Route {...rest} render={(props) => (
//         fakeAuth.isAuthenticated === true
//             ? <Component {...props} />
//             : <Redirect to='/login' />
//     )} />

// )
