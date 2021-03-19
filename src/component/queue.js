import React from 'react';
import PageHeader from '../component/pageheader';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(1)
    },
}))

export default function Queue() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue)=> {
    setValue(newValue);
    };
    return(
        <>
            <PageHeader title="All Reservation" subtitle="Display all reservation and details " icon={<EventAvailableIcon fontSize="large"/>}/>
            <Paper className={classes.pageContent}>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Pedodontics" />
                    <Tab label="Oral Surgery" />
                    <Tab label="Impaction" />
                    <Tab label="Checkup" />
                </Tabs>
            </Paper>
        </>
    )
}