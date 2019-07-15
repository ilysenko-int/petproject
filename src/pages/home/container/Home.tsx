import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import bg from '../../../assets/images/bg.jpg';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      background: `url(${bg}) 60% 60%`,
      backgroundSize: 'cover',
      height: 400,
      width: '100%'
    },
  }),
);



const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <section className={classes.mainWrapper} />
      <Container>
        <header className="App-header"><Typography variant="h6">Welcome on the Capitals website!</Typography></header>
      </Container>
    </div>
  );
}

export default App;
