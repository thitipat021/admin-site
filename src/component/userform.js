import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { FormUse, Form } from './formuse';
import Contrl from '../component/controls/contrl';
import * as userService from "../services/user_service";

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
    
    const {
        person,
        setPerson,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }=FormUse(initialPerson, true, validate);

    const handleSubmit = e=> {
        e.preventDefault()
        if(validate()) {
            addOrEdit(person, resetForm);
        }
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
                    <Contrl.Input name="fullName" label="Full Name" value={person.fullName} onChange={handleInputChange} error={errors.fullName}/>
                    <Contrl.Input label="Email" name="email" value={person.email} onChange={handleInputChange} error={errors.email}/>
                    <Contrl.Input label="Phone number" name="phoneNum" value={person.phoneNum} onChange={handleInputChange} error={errors.phoneNum}/>
                </Grid>
                <Grid item xs={6}>
                    <Contrl.RadioGroup name="gender" label="Gender" value={person.gender} onChange={handleInputChange} items={genderItems}/>
                    <Contrl.Select name="roleId" label="Role" value={person.roleId} onChange={handleInputChange} options={userService.getRoleCollection()} error={errors.roleId}/>
                    <Contrl.Input name="password" label="Password" value={person.password} onChange={handleInputChange} error={errors.password}/>
                    <div>
                        <Contrl.Button type="submit" text="Submit"/>
                        <Contrl.Button text="Reset" color="default" onClick={resetForm}/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}