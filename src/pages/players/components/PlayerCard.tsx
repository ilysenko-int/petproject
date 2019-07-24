import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Player } from "../types/";
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {

        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        }
    }),
);

interface ComponentProps {
    item: Player
}

export default function PlayerCard(props: ComponentProps) {
    const classes = useStyles();
    const player = props.item

    const defense = player.positions.defense
    const offense = player.positions.offense
    const special = player.positions.special

    let positions = offense ? offense.join(',') : ''
    positions += defense ? positions !== '' ? ',' + defense.join(',') : defense.join(',') : ''
    positions += special ? positions !== '' ? ',' + special.join(',') : special.join(',') : ''
    return (
        <Grid item={true} sm={4} md={3} xs={12}>
            <Card className={classes.card}>
                <Link to={`/players/${player.id}`} >
                    <CardMedia className={classes.media} image={player.bio.photo} title={player.firstName + ' ' + player.lastName} />
                </Link>
                <CardHeader title={player.firstName + ' ' + player.lastName + ' #' + player.jersey_number} subheader={positions} />
                <CardActions>
                    <Link to={`/players/${player.id}`} >Read more</Link>
                </CardActions>
            </Card>
        </Grid>
    );
}
