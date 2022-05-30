import * as React from 'react';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import moment from 'moment';

let Vacancy = (props) => {

    return (
        <Box sx={{height: "90vh"}}>
            <CssBaseline/>
            <main>
                <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing={4}>
                        {props.vacancies.map((v) => (
                                <Grid item key={v.id} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                    >
                                        <CardContent sx={{flexGrow: 1}}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {v.academicTitleDtoResponse.title}
                                            </Typography>
                                            <Typography gutterBottom>
                                                {v.department.departmentName}
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Typography variant="caption">
                                                        {moment(v.start_date).format('LL')}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="caption">
                                                        {moment(v.finish_date).format('LL')}
                                                    </Typography>
                                                </Grid>
                                            </Grid>


                                        </CardContent>
                                        <CardActions>
                                            <Button size="small"
                                                    component={Link}
                                                    to={{
                                                        pathname: "/profile",
                                                        state: {
                                                            vacancy: v,
                                                            vacancies: props.vacancies
                                                        },
                                                    }}>Apply</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>
            </main>
        </Box>
    );
}
export default Vacancy;