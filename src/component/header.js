import { AppBar, Grid, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, {useContext} from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/user'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
    },
    logo1:{
        color: '#4B0082'
    },
})

export default function Header() {
    const classes = useStyles();

    const user = useContext(UserContext)
    const history = useHistory()

    const doLogout = () =>{
        user.setIsAuth(false)
        history.push('/')
    }
    return(
        <AppBar position="static" className={classes.root} >
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <LocalHospitalIcon classes={{root:classes.logo1}}/> 
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <Link to="/">
                            <IconButton onClick={doLogout}>
                                <PowerSettingsNewIcon fontSize="small"/>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}