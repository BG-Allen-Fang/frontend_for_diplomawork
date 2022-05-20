import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

export default function UserProfessionalInfo() {
    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Professional Information
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                            Vacancy
                        </InputLabel>
                        <NativeSelect>
                            <option>Professor</option>
                            <option>Associated professor</option>
                            <option>Professors assistant</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                            Academic Degree
                        </InputLabel>
                        <NativeSelect>
                            <option>Bachelor</option>
                            <option>Master</option>
                            <option>PhD</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Academic Title
                        </InputLabel>
                        <NativeSelect>
                            <option>Professor</option>
                            <option>Associated professor</option>
                            <option>Professors assistant</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        label="Education"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        label="Experience"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        label="Scientific Interests"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        label="Scopus ID"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        label="HIndex"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        label="Scopus Link"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
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
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        label="Research Link"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Scholar Link"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="Scholar HIndex"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}