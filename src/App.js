import React, {useContext} from "react";
import { BrowserRouter, Route, Switch, Router} from "react-router-dom";
import Login from "./page/login";
import ManageUser from "./page/manageusr";
import {UserContext} from './context/user'

const App = () => {
    const user = useContext(UserContext)
    const renderRouter = () => {
        return (
            <Switch>
                <Route exact path="/manageuser" component={ManageUser} />
            </Switch>
        );  
    };
    return <BrowserRouter>{user.isAuth ? renderRouter() : <Login />}</BrowserRouter>
};

export default App;