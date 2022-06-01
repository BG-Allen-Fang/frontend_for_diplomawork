import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Card from "@mui/material/Card";
import {CardActionArea, CardActions, Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import requests from '../../../images/requests.png';
import poll from '../../../images/poll.jpg';
import teams from '../../../images/teams.jpg';
import {Link} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const Dashboard = () => {

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3} marginTop={"100px"} direction="row"
                  justifyContent="space-evenly"
                  alignItems="center">
                <Grid item xs="auto">
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={requests}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    See Requests
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="primary" component={Link} to="/request">
                                Let Start
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs="auto">
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={teams}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Create Meeting
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="primary" component={Link} to="/teams">
                                Let Start
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs="auto">
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={poll}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Create Poll
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="primary" component={Link} to="/poll">
                                Let Start
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </ThemeProvider>
    );
}

export default Dashboard;