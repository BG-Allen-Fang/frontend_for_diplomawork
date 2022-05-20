import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, FormControl, InputLabel, NativeSelect} from "@mui/material";
import Button from "@mui/material/Button";

const Development = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Name"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Description"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Development Type
                    </InputLabel>
                    <NativeSelect>
                        <option>Professor</option>
                        <option>Associated professor</option>
                        <option>Professors assistant</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Divider/>
        </Grid>
    )
}


export default class UserProfessionalInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            development: []
        };

    }

    handleCreateDevelopment = e => {
        e.preventDefault();
        const {development} = this.state;

        this.setState({
            development: [
                ...development,
                {}
            ]
        });
    };


    render() {
        const {development} = this.state;
        return (
            <React.Fragment>
                <Typography align="center" variant="h6" gutterBottom>
                    Development
                </Typography>


                {development.map((e) => (<Development {...e} />))}

                <Button
                    variant="contained"
                    sx={{mt: 3, ml: 1}}
                    onClick={this.handleCreateDevelopment}
                >
                    Add
                </Button>
            </React.Fragment>
        );
    }


}