import React from 'react';
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { Container, Paper, Grid, Typography, CircularProgress } from '@material-ui/core/';
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
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'none',
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
    fetchArticleById: (id: any) => void;
    article: News,
    fetching: boolean,
    not_existed: boolean,
}

class NewsDetails extends React.Component<ComponentProps & RouteComponentProps> {

    componentDidMount() {
        this.props.fetchArticleById(this.props.match.params)
    }

    render() {
        const { classes, article } = this.props;
        return (
            <Container className={classes.container} >
                {this.props.fetching && <CircularProgress className={classes.progress} />}
                {!this.props.not_existed && <Grid container={true} className={classes.root} spacing={2}>
                    <Grid item={true} xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5">{article.title}</Typography>
                            <img src={article.cover} alt={article.title} />
                            <Typography variant="body1">{article.description}</Typography>
                            {article.images.length > 0 && article.images.map(item => <img key={item} src={item} alt={item} />)}
                        </Paper>
                    </Grid>
                </Grid>
                }
                {this.props.not_existed && <Typography variant="h4">Sorry,we don't have such article yet...</Typography>}
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    article: state.news.article,
    fetching: state.news.fetching,
    not_existed: state.news.not_existed,
});

const mapDispatchToProps = {
    fetchArticleById,
};

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsDetails));