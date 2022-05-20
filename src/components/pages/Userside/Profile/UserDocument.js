import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Stack, styled} from "@mui/material";
import Button from "@mui/material/Button";

const Input = styled('input')({
    display: 'none',
});

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Documentation
            </Typography>
            <Grid container spacing={3}>
                <Grid marginLeft="140px" item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button  variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                    <Typography>Upload CV</Typography>
                    </Stack>
                </Grid>
                <Grid marginLeft="140px" item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button  variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                        <Typography>Upload Passport</Typography>
                    </Stack>
                </Grid>
                <Grid marginLeft="140px" item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button  variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                        <Typography>Upload Photo 3*4</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}