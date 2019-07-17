import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { AppState } from "../../../store";
import { News } from "../types";
import { fetchArticleById } from '../actions/fetchArticleById'
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
    fetchArticleById: (id: any) => void;
    article: News,
}

class NewsDetails extends React.Component<ComponentProps & RouteComponentProps> {

    componentDidMount() {
        this.props.fetchArticleById(this.props.match.params)
    }

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.container} >
                Details Info
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    article: state.news.article
});

const mapDispatchToProps = {
    fetchArticleById,
};

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsDetails));