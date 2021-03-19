import React from 'react';
import SideNav from '../component/sidenav';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../component/header';
import Queue from '../component/queue';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        }
    },
    shape: {
        borderRadius:'12px'
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform:'translateZ(0)'}
        }
    }
})

const useStyles = makeStyles({
    mngMain: {
        paddingLeft: '260px',
        width: '100%'
    }
})

function QueueDisplay() {
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
        <SideNav></SideNav>
        <div className={classes.mngMain}>
            <Header/>
            <Queue/>
        </div>
        <CssBaseline/>
    </ThemeProvider>
    )
}
export default QueueDisplay;