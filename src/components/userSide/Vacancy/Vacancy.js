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

let Vacancy = (props) => {
    const getByIdButton = (e) => {
        let id = e.target.value;
        props.getVacancyByIdDispatch(id)

    }

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
                                            <Typography>
                                                {v.department.departmentName}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">View</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <Button onClick={getByIdButton} size="small" value={2}>Get 1 more</Button>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </Box>
    );
}
export default Vacancy;