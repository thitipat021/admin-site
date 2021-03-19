import React, {useContext} from "react";
import { BrowserRouter, Route, Switch, Router} from "react-router-dom";
import Login from "./page/login";
import ManageUser from "./page/manageusr";
import {UserContext} from './context/user'
import QueueDisplay from "./page/queuedisplay";

const App = () => {
    const user = useContext(UserContext)
    const renderRouter = () => {
        return (
            <Switch>
                <Route exact path="/manageuser" component={ManageUser} />
                <Route exact path="/queuedis" component={QueueDisplay} />
            </Switch>
        );  
    };
    return <BrowserRouter>{user.isAuth ? renderRouter() : <Login />}</BrowserRouter>
};

export default App;