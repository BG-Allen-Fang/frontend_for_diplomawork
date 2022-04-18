import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Link from "@mui/material/Link";
import {Grid, styled} from "@mui/material";
import {green} from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import aitu_white_logo from "../../Images/aitu-logo_white.png"


const StyledLink = styled(Link)`
  color: #8D8D8D;
  font-family: "Poppins", sans-serif;
  transition: all 500ms ease-out;

  &:hover {
    color: #FFFFFF;
  }
`;

const FooterCustom = () => {
    return (
        <Box sx={{fontFamily: '"Poppins", sans-serif', color: 'white', bgcolor: '#181818', p: 6, mt: 10}}
             component="footer">
            <Grid paddingLeft={10} paddingRight={10} container spacing={2}>
                <Grid paddingLeft={5} paddingRight={5} item xs={12} sm={4}>
                    <div style={{marginBottom: 60}}>
                        <Typography variant="h6" align="left"
                                    style={{fontFamily: '"Poppins", sans-serif', fontWeight: "bold"}} gutterBottom>
                            Astana IT University
                        </Typography>
                        <hr color={green[500]}/>
                    </div>
                    <div>
                        <CardMedia
                            component="img"
                            image={aitu_white_logo}
                            alt="random"
                            style={{
                                boxSizing: "inherit",
                                display: "block",
                                height: 75,
                                width: 146,
                                maxHeight: 75,
                                maxWidth: 146,
                                marginRight: 20,
                                marginTop: 5,
                                marginBottom: 45
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            align="left"
                            component="p"
                            color={"gray"}
                            style={{fontFamily: '"Poppins", sans-serif'}}
                        >
                            <br/>
                            Nur-Sultan
                            <br/>
                            EXPO business center, block C.1.
                            <br/>
                            Kazakhstan, 010000
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="left"
                            component="p"
                            style={{marginBottom: 20, fontFamily: '"Poppins", sans-serif'}}
                        >
                            <br/>
                            +7 (7172)645-710
                            <br/>
                            info@astanait.edu.kz
                        </Typography>
                        <hr color={green[500]}/>
                    </div>
                </Grid>
                <Grid paddingLeft={5} paddingRight={5} item xs={12} sm={4}>
                    <div style={{marginBottom: 26}}>
                        <Typography variant="h6" align="left"
                                    style={{fontFamily: '"Poppins", sans-serif', fontWeight: "bold"}} gutterBottom>
                            Mission of the University
                        </Typography>
                        <hr color={green[500]}/>
                    </div>
                    <div>
                        <Typography
                            variant="subtitle1"
                            align="left"
                            component="p"
                            color={"gray"}
                            style={{fontFamily: '"Poppins", sans-serif'}}
                        >
                            Astana IT University provides digital transformation through training, research and
                            successful innovations.
                        </Typography>
                    </div>
                </Grid>
                <Grid paddingLeft={5} paddingRight={5} item xs={12} sm={4}>
                    <div style={{marginBottom: 26}}>
                        <Typography variant="h6" align="left"
                                    style={{fontFamily: '"Poppins", sans-serif', fontWeight: "bold"}} gutterBottom>
                            About
                        </Typography>
                        <hr color={green[500]}/>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <StyledLink href={"https://astanait.edu.kz/en/about-2/"} underline="none">About the
                                university</StyledLink>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledLink href={"https://astanait.edu.kz/en/applicants/"}
                                        underline="none">Applicants</StyledLink>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledLink href={"https://astanait.edu.kz/en/university-life-2/"}
                                        underline="none">Students</StyledLink>
                        </Grid>
                        <Grid item xs={6}>
                            <StyledLink href={"https://3dtour.expo2017astana.com/index.html?s=pano415335"}
                                        underline="none">3D Tour</StyledLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FooterCustom;