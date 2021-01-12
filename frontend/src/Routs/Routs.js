import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Here we are importing all the components that will be directly passed to <Route component={<ComponentName>} />
// You could even go so far as to move these components from /src/components to /src/routes in large scale applications
import SignIn from '../Layouts/SignPage/SignIn/SignIn';
import SignUp from '../Layouts/SignPage/SignUp/SignUp';
import Congratulations from '../Layouts/SignPage/Congratulations/Congratulations'
import Verification from '../Layouts/SignPage/Verification/Verification'
import MotionHome from '../Layouts/PostPage/MotionHome/MotionHome';
import Profile from '../Layouts/PostPage/Profile/Profile';
import EditAccount from '../Layouts/PostPage/EditAccount/EditAccount';
import FindFriends from '../Layouts/PostPage/FindFriends/FindFriends'
import YourFriends from '../Layouts/PostPage/YourFriends/YourFriends';
import NotFound from '../Layouts/PageNotFound/NotFound';
import {withAuth} from '../HOC/withAuth';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/congratulations' component={Congratulations} />
                <Route path='/verification' component={Verification} />
                <Route path='/motionhome' component={withAuth(MotionHome)} />
                <Route path='/profile' component={Profile} />
                <Route path='/editaccount' component={EditAccount} />
                <Route path='/findfriends' component={FindFriends} />
                <Route path='/yourfriends' component={YourFriends} />

                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routes;