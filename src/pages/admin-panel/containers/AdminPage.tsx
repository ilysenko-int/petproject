import React from 'react';
import { connect } from "react-redux";
import { AppState } from "../../../store";
import { AdminState } from "../types";
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { Theme, AppBar, Tabs, Tab, Container, Typography } from '@material-ui/core';

import AddPlayer from '../components/addPlayer';

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
});

interface ComponentProps extends WithStyles<typeof styles> {
  admin: AdminState,
}

interface TabContainerProps {
  children?: React.ReactNode;
}

interface ComponentState { value: number };

interface LinkTabProps {
  label?: string;
  href?: string;
}

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { event.preventDefault(); }}
      {...props}
    />
  );
}

class AdminPage extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      value: 0
    }
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ value: newValue });
  }

  render() {
    const { classes } = this.props;
    const value = this.state.value;
    return (
      <div>
        <Container className={classes.container} >
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <Tab label="Add Player" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><AddPlayer /></TabContainer>}
          {value === 1 && <TabContainer>Page Two</TabContainer>}
          {value === 2 && <TabContainer>Page Three</TabContainer>}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  admin: state.admin
});

const mapDispatchToProps = {

};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage));
