import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Contrl from '../component/controls/contrl'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight:'0px'
    }
}))

export default function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles();

    return(
        <Dialog open={openPopup} maxWidth="md" classes={{paper :classes.dialogWrapper}}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" component="div" style={{flexGrow:1}}>{title}</Typography>
                    <Contrl.ActionButton color="secondary" onClick={()=>{setOpenPopup(false)}}><CloseIcon/></Contrl.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}