import React, { FC } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';

interface IPrivateRouteProps extends RouteProps{
    isLoggedIn:boolean
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ component, isLoggedIn, ...rest }) => {
    
    if (!component) throw Error("component is undefined");

    const Component = component;
    const render = (props: RouteComponentProps<any>): React.ReactNode => 
        isLoggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login' }} />;

    return <Route {...rest} render={render} />;
}

const mapStateToProps = ({ auth }: ApplicationState) => ({
    isLoggedIn: auth.isLoggedIn,
})

export default connect(mapStateToProps)(PrivateRoute)