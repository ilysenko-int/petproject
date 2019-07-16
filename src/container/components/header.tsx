import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core/';
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
            alignItems: 'center',
            display: 'inline-flex',
            '& a': {
                color: '#040d2e',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                '&:hover': {
                    opacity: 0.8
                },
                '& span': {
                    marginBottom: -5,
                    marginLeft: 10,
                }
            }
        },
        button: {
            margin: theme.spacing(1),
            color: theme.palette.secondary.dark
        }
    }),
);

const ButtonAppBar = withRouter(({ history }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" ><Link to="/"><img width="52" src={logo} alt="kyiv Capitals logo" /> <span>Kyiv Capitals</span> </Link></Typography>
                        <Button color="inherit"><Link to="/players">Roster</Link></Button>
                        <Button color="inherit"><Link to="/shop">Fan shop</Link></Button>
                        <Button color="inherit"><Link to="/news">News</Link></Button>
                        <Button color="secondary" onClick={() => { history.push('/booking') }} variant="outlined" className={classes.button}>
                            Book a ticket
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
})

export default ButtonAppBar