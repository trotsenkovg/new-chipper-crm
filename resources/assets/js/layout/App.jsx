import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import LoginPage from "../pages/Auth/LoginPage/index"
import Registration from "../components/Auth/Registration";

const guestRoutes = [
    { path: "/", component: LoginPage, exact: true },
    { path: "/register", component: Registration, exact: true },
];
/*const privateRoutes = [
    { path: "/dashboard", component: Dashboard, exact: true}
];*/

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {guestRoutes.map((route, key) => {
                        return (
                            <Route
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                                key={key}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;