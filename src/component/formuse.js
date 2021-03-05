import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';


export function FormUse(initialPerson) {
    const [person, setPerson] = useState(initialPerson);

    const handleInputChange = e=>{
        const {name, value} = e.target
        setPerson({
            ...person,
            [name]: value
        })
    }

    return {
        person,
        setPerson,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {
    const classes = useStyles();

    return(
        <form className={classes.root}>
            {props.children}
        </form>
    )
}