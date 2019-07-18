import React from 'react';
import { connect } from "react-redux";
import { Container, Grid } from '@material-ui/core/';
import { AppState } from "../../../store";
import { PlayersState } from "../types";
import PlayerCard from '../components/PlayerCard';
import { fetchNews } from '../actions/fetch'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});


interface ComponentProps extends WithStyles<typeof styles> {
  fetchNews: () => void;
  players: PlayersState,
}

class Players extends React.Component<ComponentProps> {

  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    const { classes, players } = this.props;

    return (
      <div>
        <Container className={classes.container} >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {this.props.players.data.map(item => <PlayerCard key={item.id} item={item} />)}
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  players: state.players
});

const mapDispatchToProps = {
  fetchNews,
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Players));
