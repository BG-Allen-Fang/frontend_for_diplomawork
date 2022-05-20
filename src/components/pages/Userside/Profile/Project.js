import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider} from "@mui/material";
import Button from "@mui/material/Button";

const Project = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Scopus ID"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="HIndex"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Scopus Link"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Orc ID"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Research ID"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="HIndex"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Divider/>
        </Grid>
    )
}


export default class UserProfessionalInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: []
        };

    }

    handleCreateProject = e => {
        e.preventDefault();
        const {project} = this.state;

        this.setState({
            project: [
                ...project,
                {}
            ]
        });
    };


    render() {
        const {project} = this.state;
        return (
            <React.Fragment>
                <Typography align="center" variant="h6" gutterBottom>
                    Projects
                </Typography>


                {project.map((e) => (<Project {...e} />))}

                <Button
                    variant="contained"
                    sx={{mt: 3, ml: 1}}
                    onClick={this.handleCreateProject}
                >
                    Add
                </Button>
            </React.Fragment>
        );
    }


}