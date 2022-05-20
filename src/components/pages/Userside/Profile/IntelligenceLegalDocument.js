import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, Stack, styled} from "@mui/material";
import Button from "@mui/material/Button";

const Input = styled('input')({
    display: 'none',
});

const IntelLegalDoc = () => {

    return (
        <Grid container spacing={3}>
            <Grid marginLeft="140px" item xs={12} sm={6}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                    <TextField
                        required
                        label="Document name"
                        fullWidth
                        variant="standard"
                    />
                </Stack>
            </Grid>
            <Divider/>
        </Grid>
    )
}


export default class UserProfessionalInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intelLegalDoc: []
        };

    }

    handleCreateIntelLegalDoc = e => {
        e.preventDefault();
        const {intelLegalDoc} = this.state;

        this.setState({
            intelLegalDoc: [
                ...intelLegalDoc,
                {}
            ]
        });
    };


    render() {
        const {intelLegalDoc} = this.state;
        return (
            <React.Fragment>
                <Typography align="center" variant="h6" gutterBottom>
                    Intelligence Legal Documents
                </Typography>


                {intelLegalDoc.map((e) => (<IntelLegalDoc {...e} />))}

                <Button
                    variant="contained"
                    sx={{mt: 3, ml: 1}}
                    onClick={this.handleCreateIntelLegalDoc}
                >
                    Add
                </Button>
            </React.Fragment>
        );
    }


}