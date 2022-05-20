import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, FormControl, InputLabel, NativeSelect} from "@mui/material";
import Button from "@mui/material/Button";

const Article = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Title"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    label="APA"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="DOI"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Article Type
                    </InputLabel>
                    <NativeSelect>
                        <option>Article</option>
                        <option>Erratum</option>
                        <option>Letter</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Authors"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    label="Source link"
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
            articles: []
        };

    }

    handleCreateArticle = e => {
        e.preventDefault();
        const {articles} = this.state;

        this.setState({
            articles: [
                ...articles,
                {}
            ]
        });
    };


    render() {
        const {articles} = this.state;
        return (
            <React.Fragment>
                <Typography align="center" variant="h6" gutterBottom>
                    Articles
                </Typography>


                {articles.map((e) => (<Article {...e} />))}

                <Button
                    variant="contained"
                    sx={{mt: 3, ml: 1}}
                    onClick={this.handleCreateArticle}
                >
                    Add
                </Button>
            </React.Fragment>
        );
    }


}