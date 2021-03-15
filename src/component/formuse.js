import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';


export function FormUse(initialPerson, validateOnChange=false, validate) {
    const [person, setPerson] = useState(initialPerson);
    const [errors, setErrors] = useState({});

    const handleInputChange = e=>{
        const {name, value} = e.target
        setPerson({
            ...person,
            [name]: value
        })
        if(validateOnChange)
        validate({[name]: value})
    }

    const resetForm = ()=>{
        setPerson(initialPerson);
        setErrors({})
    }

    return {
        person,
        setPerson,
        errors,
        setErrors,
        handleInputChange,
        resetForm
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
    const {children, ...other} = props;

    return(
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    )
}