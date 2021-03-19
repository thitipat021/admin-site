import { Paper, Grid, makeStyles, Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Form } from "../component/formuse";
import Contrl from "../component/controls/contrl";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { UserContext } from "../context/user";
import userApi from "../api/userApi";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundColor: "#f4f5fd",
    },
    root: {
        padding: 20,
        height: "70vh",
        width: "450px",
        margin: "50px auto",
        "& .MuiFormControl-root": {
            margin: theme.spacing(2),
        },
    },
    avatar: {
        backgroundColor: "#4B0082",
        margin: theme.spacing(5),
    },
}));

function Login(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const classes = useStyles();
    const user = useContext(UserContext);

    const { history } = props;

    const doLogin = async () => {
        try {
            const response = await userApi.post(
                "/login-admin",
                { username: username, password: password },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                },
            );

            if (response.data.success) {
                user.setUser(response.data)
                user.setIsAuth(true);
                history.push("/manageuser");
            }
        } catch (err) {}
    };
    return (
        <Grid container className={classes.bg}>
            <Paper className={classes.root} elevation={10}>
                <Grid item xs={12} align="center">
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h3>DS Admin</h3>
                </Grid>
                <Form align="center">
                    <Grid item xs={12}>
                        <Contrl.Input
                            name="fullName"
                            label="Full Name"
                            value={username}
                            onChange={(text) => setUserName(text.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Contrl.Input
                            name="password"
                            label="Password"
                            value={password}
                            onChange={(text) => setPassword(text.target.value)}
                        />
                    </Grid>
                </Form>
                <div align="center">
                    <Link onClick={() => doLogin()}>
                        <Contrl.Button
                            size="medium"
                            type="submit"
                            text="Login"
                        />
                    </Link>
                </div>
            </Paper>
        </Grid>
    );
}
export default withRouter(Login);
