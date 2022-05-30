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
                    <h1>Module for competitive replacement of positions of professorial and teaching staff of Astana IT University LLP concurs</h1>
                    <Button  size="large" sx={{margin: 5}}  variant="contained" component={Link} to="/vacancy">Vacancies</Button>

                </Box>
            </Box>
        </Box>
    )
}

export default Home;

