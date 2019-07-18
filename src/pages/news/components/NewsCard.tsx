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
import { News } from "../types";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            width: '100%',
            maxWidth: 600,
            marginBottom: 25,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        }
    }),
);

interface ComponentProps {
    item: News
}

export default function NewsCard(props: ComponentProps) {
    const classes = useStyles();

    var formattedTime = new Date(+props.item.created_at.seconds * 1000).toDateString();

    return (
        <Card className={classes.card}>
            <CardHeader title={props.item.title} subheader={formattedTime} />
            <CardMedia
                className={classes.media}
                image={props.item.cover}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.item.pre_description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/news/${props.item.title}`} >Read more</Link>
            </CardActions>
        </Card>
    );
}
