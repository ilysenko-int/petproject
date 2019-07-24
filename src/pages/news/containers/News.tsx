import React from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import { AppState } from "../../../store/";
import { NewsState } from "../types/";
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../actions/fetch'
import withLoading from '../../../components/loading/withLoading'
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';


interface ComponentProps extends WithStyles<typeof styles> {
  fetchNews: () => void;
  news: NewsState,
  fetching: boolean,
}

class App extends React.Component<ComponentProps> {

  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container className={classes.container} >
          {this.props.news.data.map(item => <NewsCard key={item.id} item={item} />)}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  news: state.news,
  fetching: state.news.fetching,
});

const mapDispatchToProps = {
  fetchNews,
};

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});


export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
