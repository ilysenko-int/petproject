import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography,  Container } from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            textAlign: 'center',
            color: theme.palette.primary.light
        },
    }),
);

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Typography variant="subtitle2" >Made with Love by Ihor Lysenko</Typography>
            </Container>
        </div>
    );
}

export default Footer