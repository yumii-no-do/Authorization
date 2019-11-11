import React, { FC } from 'react';
import {Route, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Results from './pages/Results';


const Routes: FC = () => (
        <Switch>
            <PrivateRoute exact path='/' component={Results} />
            <Route exact path='/login' component={Login} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>

)

export default Routes