import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest}) => {
    //pulling component from props, and  also pass the 
    //remaining props through to <Route/>

    return (
        <Route {...rest}
        render={(props) => {
    // if token is in localStorage render the component
    if(localStorage.getItem('token')){
        return <Component {...props} />;
    }
    //otherwise redirect to login
    else {
        return <Redirect to='/login' />
    }
    }}
     />
    )
};

export default PrivateRoute;