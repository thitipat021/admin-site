import { Button, Grid, RadioGroup, Select, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { FormUse, Form } from './formuse';


const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]

const initialPerson = {
    id: 0,
    fullName: '',
    email: '',
    phoneNum: '',
    gender: 'male',
    roleId: '',
    password: ''
}

export default function UserForm(props) {
    const [person, setPerson] = useState(initialPerson);
    const [errors, setErrors] = useState({});
    const {addOrEdit, recordForEdit} = props;
    const validate = (fieldValues = person) => {
        let temp = {...errors}
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid."
        if ('phoneNum' in fieldValues)
            temp.phoneNum = fieldValues.phoneNum.length>9?"":"Minimum 10 numbers is required."
        if ('roleId' in fieldValues)
            temp.roleId = fieldValues.roleId.length!=0?"":"This field is required."
        if ('password' in fieldValues)
            temp.password = fieldValues.password?"":"The password is required."
        setErrors({
            ...temp
        })

        if (fieldValues == person)
            return Object.values(temp).every(x => x == "")
    }
    
    // const {
    //     person,
    //     setPerson,
    //     errors,
    //     setErrors,
    //     handleInputChange,
    //     resetForm
    // }=FormUse(initialPerson, true, validate);

    const handleSubmit = e=> {
        e.preventDefault()
        if(validate()) {
            addOrEdit(person, resetForm);
        }
    }
    const resetForm = ()=>{
        setPerson(initialPerson);
        setErrors({})
    }
    const handleInputChange = e=>{
        // const {name, value} = e.target
        // setPerson({
        //     ...person,
        //     [name]: value
        // })
        // if(validateOnChange)
        // validate({[name]: value})
    }

    useEffect(() =>{
        if(recordForEdit != null)
            setPerson({
                ...recordForEdit
            })
    }, [recordForEdit])

    return(
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField name="fullName" label="Full Name" value={person.fullName} onChange={handleInputChange} error={errors.fullName}/>
                    <TextField label="Email" name="email" value={person.email} onChange={handleInputChange} error={errors.email}/>
                    <TextField label="Phone number" name="phoneNum" value={person.phoneNum} onChange={handleInputChange} error={errors.phoneNum}/>
                </Grid>
                <Grid item xs={6}>
                    <RadioGroup name="gender" label="Gender" value={person.gender} onChange={handleInputChange} items={genderItems}/>
                    <Select name="roleId" label="Role" value={person.roleId} onChange={handleInputChange}  error={errors.roleId}/>
                    <TextField name="password" label="Password" value={person.password} onChange={handleInputChange} error={errors.password}/>
                    <div>
                        <Button type="submit" text="Submit"/>
                        <Button text="Reset" color="default" onClick={resetForm}/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}