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
        menulink: {
            marginRight: theme.spacing(2),
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontSize: 16,
            fontWeight: 600,
            '&:hover': {
                color: theme.palette.primary.light,
            }
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
            fontWeight: 600,
            margin: theme.spacing(1),
            color: theme.palette.primary.main,
        }
    }),
);

const ButtonAppBar = withRouter(({ history }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" ><Link to="/"><img width="52" src={logo} alt="kyiv Capitals logo" /> <span>Kyiv Capitals</span> </Link></Typography>
                        <Link className={classes.menulink} to="/players">Roster</Link>
                        {/* <Link className={classes.menulink} to="/shop">Fan shop</Link> */}
                        <Link className={classes.menulink} to="/news">News</Link>
                        {/* <Button className={classes.button} color="primary" onClick={() => { history.push('/booking') }} variant="outlined" >
                            Book a ticket
                        </Button> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
})

export default ButtonAppBar