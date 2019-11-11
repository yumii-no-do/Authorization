import React from 'react';
import Lock from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.secondary.contrastText,
        background: theme.palette.secondary.main,
        padding: theme.spacing(1),
        borderRadius: '50%',
        margin:theme.spacing(1)
    }
}))

const LockIcon = () => {
    const classes = useStyles();
    return <Lock classes={classes} />
}
    
export default LockIcon;

