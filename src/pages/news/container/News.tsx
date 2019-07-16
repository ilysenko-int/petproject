import React from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppState } from "../../../store/index";

import { fetchNews } from '../actions/fetch'

class App extends React.Component {

  componentDidMount() {
 
  }

  render() {
    return (
      <div>
        <Container>
          <header className="App-header"><Typography variant="h6">Latest news</Typography></header>
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