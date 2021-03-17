import { AppBar, Grid, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';

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
                            <IconButton>
                                <PowerSettingsNewIcon fontSize="small"/>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}