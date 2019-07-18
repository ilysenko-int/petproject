import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { Container, Paper, Grid, Typography, CircularProgress } from '@material-ui/core/';
import { AppState } from "../../../store";
import { Player } from "../types";
import { fetchPlayerById } from '../actions/fetchPlayerById'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';


const styles = (theme: Theme) => createStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
    },
    control: {
        padding: theme.spacing(2),
    },
});


interface ComponentProps extends WithStyles<typeof styles> {
    fetchPlayerById: (id: any) => void;
    article: Player,
    fetching: boolean,
    not_existed_article: boolean,
}

class PlayersDetails extends React.Component<ComponentProps & RouteComponentProps> {

    componentDidMount() {
        this.props.fetchPlayerById(this.props.match.params)
    }

    render() {
        const { classes, article } = this.props;
        return (
            <Container className={classes.container} >
                Details
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    player: state.players.player,
    fetching: state.players.fetching,
});

const mapDispatchToProps = {
    fetchPlayerById,
};

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayersDetails));