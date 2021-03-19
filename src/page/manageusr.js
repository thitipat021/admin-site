import React, { useState, useEffect, useCallback, useContext } from 'react';
import '../assets/manageusr.css';
import SideNav from '../component/sidenav';
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from '../component/header';
import User from '../component/user';
import userApi from '../api/userApi'
import {UserContext} from '../context/user'

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
        borderRadius: '12px'
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    }
})

const useStyles = makeStyles({
    mngMain: {
        paddingLeft: '260px',
        width: '100%'
    }
})

function ManageUser() {
    const [userData, setUserData] = useState()
    const [loadingData, setLoadingData] = useState(false)
    const classes = useStyles();

    const user = useContext(UserContext)

    const handleLoading = useCallback(() =>{
        setLoadingData(true)
    }, [])

    const handleUserData = useCallback((value) =>{
        setUserData(value)
    })
 
    const fetchData = async () => {
        const response = await userApi.get('/all-users', {
            headers: {
                Authorization: user.user?.token,
            },
        })

        if (response.data.success) {
            handleUserData(response.data.message)
        }
        handleLoading()
    }

    useEffect(() => {
        fetchData()
        
    }, [])

    return loadingData ? (
        <ThemeProvider theme={theme}>
            <SideNav></SideNav>
            <div className={classes.mngMain}>
                <Header />
                <User data={userData}/>
            </div>
            <CssBaseline />
        </ThemeProvider>
    ) : null
}

export default ManageUser;