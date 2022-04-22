import * as React from 'react';
import "./home.css"
import { Box} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
    return (
        <Box>
            <Box className="hero-image" >
                <Box className="hero-text" >
                    <h1>Module for competitive replacement of positions of professorial and teaching staff of Astana IT University LLP</h1>
                    <p>concurs</p>
                </Box>
            </Box>
            <Button sx={{margin: 5}} color="secondary" variant="contained" component={Link} to="/vacancy">Vacancies</Button>
        </Box>
    )
}

export default Home;

