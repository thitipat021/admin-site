import React, { useState } from 'react';
import UserForm from './userform';
import PageHeader from '../component/pageheader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment, TextField } from '@material-ui/core';
import Tableuse from './tableuse';

import Contrl from "../component/controls/contrl"
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from './popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))

const headCells = [
    { id: 'fullName', label: 'User Name' },
    { id: 'email', label: 'Email' },
    { id: 'phoneNum', label: 'Phone Number' },
    { id: 'role', label: 'Role' },
    { id: 'actions', label: 'Actions', disableSorting: true },

]

const User = ({data}) => {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(data)
    const [filterfunc, setFilterFunc] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = Tableuse(records, headCells, filterfunc);

    const handleSearch = e => {
        let target = e.target;
        setFilterFunc({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x?.username.toLowerCase().includes(target.value))
            }
        })
    }


    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
            <PageHeader title="New User" subtitle="Form for adding new user" icon={<PeopleOutlineIcon fontSize="large" />} />
            <Paper className={classes.pageContent}>
                <Toolbar>
                    <TextField label="Search Users" className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Contrl.Button text="Add New" variant="outlined" startIcon={<AddIcon />} className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }} />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.username}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phoneNum}</TableCell>
                                <TableCell>{item.role}</TableCell>
                                <TableCell>
                                    <Contrl.ActionButton color="primary" onClick={() => { openInPopup(item) }}>
                                        <EditOutlinedIcon fontSize="small" />
                                    </Contrl.ActionButton>
                                    <Contrl.ActionButton color="secondary" onClick={() => {}}>
                                        <CloseIcon fontSize="small" />
                                    </Contrl.ActionButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup title="User Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <UserForm recordForEdit={recordForEdit} />
            </Popup>
        </>
    )
}

export default User