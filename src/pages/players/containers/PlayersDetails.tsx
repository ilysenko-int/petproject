import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { Container, Paper, Grid, Typography, Box } from '@material-ui/core/';
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
        overflow: 'hidden'
    },
    image: {
        maxWidth: '400px',
    },
    box: {
        padding: theme.spacing(2),
    },
    control: {
        padding: theme.spacing(2),
    },
});


interface ComponentProps extends WithStyles<typeof styles> {
    fetchPlayerById: (id: any) => void;
    player: Player,
    fetching: boolean,
    not_existed_article: boolean,
}

class PlayersDetails extends React.Component<ComponentProps & RouteComponentProps> {

    componentDidMount() {
        this.props.fetchPlayerById(this.props.match.params)
    }

    render() {
        const { classes, player } = this.props;

        const defense = player.positions.defense
        const offense = player.positions.offense
        const special = player.positions.special

        let positions = offense ? offense.join(', ') : ''
        positions += defense ? positions !== '' ? ',' + defense.join(', ') : defense.join(', ') : ''
        positions += special ? positions !== '' ? ',' + special.join(', ') : special.join(', ') : ''


        return (
            <Container className={classes.container} >
                <Paper className={classes.paper}>
                    <img className={classes.image} src={player.bio.photo} alt="" />
                    <Box className={classes.box}>
                        <Typography variant="h4">{player.firstName} {player.lastName} #{player.jersey_number}</Typography>
                        <Typography variant="body1">Positions on the field: <b>{positions}</b></Typography>
                        <Typography variant="body1"><p>{player.bio.about}</p></Typography>
                        <p>Years of experience: {player.bio.experience}</p>
                        {player.anthropometry ? <p>Height: {player.anthropometry.height} cm</p> : null}
                        {player.anthropometry ? <p>Weight: {player.anthropometry.weight} kg</p> : null}
                    </Box>
                </Paper>
            </Container>
        );
    }
}

// {
//     player: {
//       positions: {
//           offense: [],
//           defense: [],
//           special: [],
//       },
//       socialmedia: {
//           instagram: '',
//           facebook: '',
//       }
//     },
//     not_existed_player: false,
//   }

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