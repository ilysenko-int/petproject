import React from 'react';
import { connect } from "react-redux";
import { AppState } from "../../../store";
import { withStyles, WithStyles, createStyles } from '@material-ui/styles';
import { Typography, Divider, InputLabel, Select, FilledInput, FormControl, MenuItem, TextField, Theme, Button } from '@material-ui/core';
import create from '../actions/create';

const styles = (theme: Theme) => createStyles({
    container: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0,
    },
    formControl: {
        margin: theme.spacing(1),
        width: 220,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
    dense: {
        marginTop: 16,
    },
    divider: {
        width: '100%',
    },
});

interface Player {
    anthropometry?: {
        [x: string]: string,
    },
    bio: {
        [x: string]: string | undefined,
    },
    firstName: string,
    lastName: string,
    jersey_number: number,
    positions: {
        [x: string]: string[],
    },
    socialmedia?: {
        [x: string]: string,
    }
}

interface ComponentProps extends WithStyles<typeof styles> {
    create: (obj: any) => void
}

interface StateComponent {
    options: {
        offense: string[],
        defense: string[],
        special: string[],
    },
    form: Player
}

class AddPlayer extends React.Component<ComponentProps, StateComponent> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                jersey_number: 0,
                anthropometry: {
                    height: '150',
                    weight: '50',
                },
                bio: {
                    about: '',
                    experience: undefined,
                    photo: '',
                },
                positions: {
                    offense: [],
                    defense: [],
                    special: [],
                },
                socialmedia: {
                    instagram: '',
                    facebook: '',
                }
            },
            options: {
                offense: ['WR', 'QB', 'TE', 'FB', 'RB', 'HB', 'LT', 'RT', 'C', 'LG', 'RG'],
                defense: ['CB', 'DT', 'S', 'FS', 'SS', 'LB', 'DE'],
                special: ['Kicker', 'Holder', 'Long Snapper', 'Kick Returner', 'Punt Returner', 'Punter', 'Gunner', 'Jammer']
            },
        }
    }

    handleChange = (name: keyof Player) => (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (name) {
            case 'anthropometry':
            case 'socialmedia':
            case 'bio':
                this.setState({ ...this.state, form: { ...this.state.form, [name]: { [event.target.id]: event.target.value } } });
                break;
            default:
                this.setState({ ...this.state, form: { ...this.state.form, [name]: event.target.value } });
        }
    };

    selectChange = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
        this.setState({ ...this.state, form: { ...this.state.form, positions: { ...this.state.form.positions, [event.target.name as string]: [...event.target.value] } } });
    };

    handleSubmit = () => {
        this.props.create({ ...this.state.form});
    }

    render() {
        const { classes } = this.props;
        const values = this.state;
        return (
            <form className={classes.container} autoComplete="off">
                <TextField
                    id="filled-name"
                    label="First name"
                    className={classes.textField}
                    value={values.form.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-last-name"
                    label="Last name"
                    className={classes.textField}
                    value={values.form.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-jersey-number"
                    type="tel"
                    inputProps={{ min: 1, max: 99, step: 1 }}
                    label="Jersey Number #"
                    className={classes.textField}
                    value={values.form.jersey_number}
                    onChange={this.handleChange('jersey_number')}
                    margin="normal"
                    variant="filled"
                />

                <Divider light={true} variant="fullWidth" />
                <Typography variant="h6"> Anthropometry </Typography>

                <TextField
                    id="height"
                    type="tel"
                    label="Height"
                    className={classes.textField}
                    value={values.form.anthropometry ? values.form.anthropometry.height : 150}
                    onChange={this.handleChange('anthropometry')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="weight"
                    type="tel"
                    label="Weight"
                    className={classes.textField}
                    value={values.form.anthropometry ? values.form.anthropometry.weight : 50}
                    onChange={this.handleChange('anthropometry')}
                    margin="normal"
                    variant="filled"
                />

                <Divider light={true} variant="fullWidth" />
                <Typography variant="h6"> Social media </Typography>

                <TextField
                    id="instagram"
                    label="Instagram"
                    className={classes.textField}
                    value={values.form.socialmedia ? values.form.socialmedia.instagram : ''}
                    onChange={this.handleChange('socialmedia')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="facebook"
                    label="Facebook"
                    className={classes.textField}
                    value={values.form.socialmedia ? values.form.socialmedia.facebook : ''}
                    onChange={this.handleChange('socialmedia')}
                    margin="normal"
                    variant="filled"
                />

                <Divider light={true} variant="fullWidth" />
                <Typography variant="h6"> Positions </Typography>

                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-simple">Select positions in offense</InputLabel>
                    <Select
                        id="offense"
                        multiple={true}
                        value={values.form.positions ? values.form.positions.offense : []}
                        onChange={this.selectChange}
                        variant="filled"
                        input={<FilledInput name="offense" id="offense" />}
                    >
                        {values.options.offense.map(type => (<MenuItem key={type} value={type}>{type}</MenuItem>))}
                    </Select>
                </FormControl>

                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-simple">Select positions in defense</InputLabel>
                    <Select
                        id="defense"
                        multiple={true}
                        value={values.form.positions ? values.form.positions.defense : []}
                        onChange={this.selectChange}
                        variant="filled"
                        input={<FilledInput name="defense" id="defense" />}
                    >
                        {values.options.defense.map(type => (<MenuItem key={type} value={type}>{type}</MenuItem>))}
                    </Select>
                </FormControl>

                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-simple">Select positions in special teams</InputLabel>
                    <Select
                        id="special"
                        multiple={true}
                        value={values.form.positions ? values.form.positions.special : []}
                        onChange={this.selectChange}
                        variant="filled"
                        input={<FilledInput name="special" id="special" />}
                    >
                        {values.options.special.map(type => (<MenuItem key={type} value={type}>{type}</MenuItem>))}
                    </Select>
                </FormControl>

                <Divider light={true} variant="fullWidth" />
                <Typography variant="h6"> Bio </Typography>

                <TextField
                    id="experience"
                    label="Years of experience"
                    className={classes.textField}
                    value={values.form.bio ? values.form.bio.experience : ''}
                    onChange={this.handleChange('bio')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="photo"
                    label="Photo"
                    className={classes.textField}
                    value={values.form.bio ? values.form.bio.photo : ''}
                    onChange={this.handleChange('bio')}
                    margin="normal"
                    variant="filled"
                />
                <img width={150} src={values.form.bio.photo} alt={values.form.firstName} />

                <TextField
                    id="about"
                    fullWidth={true}
                    type="text"
                    multiline={true}
                    label="About"
                    className={classes.textField}
                    value={values.form.bio ? values.form.bio.about : ''}
                    onChange={this.handleChange('bio')}
                    margin="normal"
                    variant="filled"
                />
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    Add New Player
                </Button>
            </form>
        )
    }
    ;
}


const mapStateToProps = (state: AppState) => ({
    admin: state.admin
});

const mapDispatchToProps = {
    create
};


export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPlayer));