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
    regisDate: new Date()
}

export default function UserForm() {
    const {
        person,
        setPerson,
        handleInputChange
    }=FormUse(initialPerson);

    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Contrl.Input name="fullName" label="Full Name" value={person.fullName} onChange={handleInputChange}/>
                    <Contrl.Input label="Email" name="email" value={person.email} onChange={handleInputChange}/>
                    <Contrl.Input label="Phone number" name="phoneNum" value={person.phoneNum} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <Contrl.RadioGroup name="gender" label="Gender" value={person.gender} onChange={handleInputChange} items={genderItems}/>
                    <Contrl.Select name="roleId" label="Role" value={person.roleId} onChange={handleInputChange} options={userService.getRoleCollection()}/>
                    <div>
                        <Contrl.Button type="submit" text="Submit"/>
                        <Contrl.Button text="Reset" color="default"/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}