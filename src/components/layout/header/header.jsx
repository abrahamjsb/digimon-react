import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import AdbIcon from '@material-ui/icons/Adb';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    }
  }));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="relative">
        <Toolbar>
          <AdbIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Digimon App
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
