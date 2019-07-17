import React from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppState } from "../../../store/";
import { NewsState } from "../types/";
import PlayerCard from '../components/PlayerCard';
import { fetchNews } from '../actions/fetch'

interface ComponentProps {
  fetchNews: () => void;
  news: NewsState
}

class App extends React.Component<ComponentProps> {

  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return (
      <div>
        <Container>
          <header className="App-header"><Typography variant="h6">Latest news</Typography></header>
          {this.props.news.data.map(item => <PlayerCard item={item} />)}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  news: state.news
});

const mapDispatchToProps = {
  fetchNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
