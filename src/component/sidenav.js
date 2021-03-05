import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core"

const useStyles = makeStyles({
    sideNav: {
        display:'flex',
        flexDirection:'column',
        position: 'absolute',
        left: '0px',
        width: '260px',
        height: '100%',
        backgroundColor: '#253053'
    }
})

export default function SideNav() {
    const classes = useStyles();
    console.log(classes)
    return(
        <div className={classes.sideNav}>

        </div>
    )
}