import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://asdev.com.ve/">
          asdev.com.ve
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
    const classes = useStyles();
    return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Abraham Sánchez
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with love with React.js and Material UI
        </Typography>
        <Copyright />
      </footer>
    )
}
