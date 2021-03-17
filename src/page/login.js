import { Paper, Grid, makeStyles, Avatar } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router,Link} from "react-router-dom";
import { Form } from '../component/formuse';
import Contrl from '../component/controls/contrl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



const useStyles = makeStyles(theme => ({
    bg: {
        backgroundColor: "#f4f5fd",
    },
    root: {
        padding: 20,
        height: '70vh',
        width: '450px',
        margin: '50px auto',
        '& .MuiFormControl-root': {
            margin: theme.spacing(2),
        },
    },
    avatar: {
        backgroundColor: '#4B0082',
        margin: theme.spacing(5),
    },
}))

function Login() {
    const classes = useStyles();

        return(
            <Grid container className={classes.bg}>
                <Paper className={classes.root} elevation={10}>
                    <Grid item xs={12} align="center">
                        <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                        <h3>DS Admin</h3>
                    </Grid>
                        <Form align="center">
                                <Grid item xs={12}>
                                    <Contrl.Input name="fullName" label="Full Name"/>
                                </Grid>
                                <Grid item xs={12}>
                                <Contrl.Input name="password" label="Password"/>
                                </Grid>
                        </Form>
                        <div align="center">
                            <Link to="/manageuser"><Contrl.Button size="medium" type="submit" text="Login"/></Link>
                        </div>
                </Paper>
            </Grid>
        );
}
export default Login;