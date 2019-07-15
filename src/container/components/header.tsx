import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/logo.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            background: theme.palette.common.white,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            '& a': {
                color: '#040d2e',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontWeight: 600,
                marginBottom: -7,
                display: 'block',
                '&:hover': {
                    opacity: 0.8
                }
            }
        },
        button: {
            margin: theme.spacing(1),
            color: theme.palette.secondary.dark
        }
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" ><Link to="/"><img width="52" src={logo} alt="kyiv Capitals logo" />Kyiv Capitals</Link></Typography>
                    <Button color="inherit"><Link to="/players">Roster</Link></Button>
                    <Button color="inherit"><Link to="/shop">Fan shop</Link></Button>
                    <Button color="secondary" variant="outlined" className={classes.button}>
                        Book a ticket
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}