import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Card from "@mui/material/Card";
import {CardActionArea, CardActions, Stack} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import requests from '../../../../Images/requests.png';
import poll from '../../../../Images/poll.jpg';
import teams from '../../../../Images/teams.jpg';
import {Link} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const Dashboard = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={4} direction="row" marginLeft="120px" marginTop="100px">
            <Card sx={{ maxWidth: 345 }}>
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

            <Card sx={{ maxWidth: 345 }}>
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
            <Card sx={{ maxWidth: 345 }}>
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
            </Stack>
        </ThemeProvider>
    );
}

export default Dashboard;