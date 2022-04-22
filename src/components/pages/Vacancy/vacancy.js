import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Vacancy = (props) => {
    const vacancies = props.vacancyPage.vacancies;

    let vacanciesElements =
        vacancies.map((v) => (
            <Grid item key={v} xs={12} sm={6} md={4}>
                <Card
                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                    <CardMedia
                        component="img"
                        image={v.image}
                        alt="random"
                        style={{height: 100}}
                    />
                    <CardContent sx={{flexGrow: 1}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {v.name}
                        </Typography>
                        <Typography>
                            {v.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))

    return (
        <Box sx={{height: "90vh"}}>
            <CssBaseline/>
            <main>
                <Container sx={{py: 8}} maxWidth="md">
                    <Grid container spacing={4}>
                        {vacanciesElements}
                    </Grid>
                </Container>
            </main>
        </Box>
    );
}

export default Vacancy;