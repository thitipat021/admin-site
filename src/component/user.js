import React from 'react';
import UserForm from './userform';
import PageHeader from '../component/pageheader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function User(){
    const classes = useStyles();

    return(
        <>
            <PageHeader title="New User" subtitle="Form for adding new user" icon={<PeopleOutlineIcon fontSize="large"/>}/>
            <Paper className={classes.pageContent}>
            <   UserForm/>
            </Paper>
        </>
    )
}