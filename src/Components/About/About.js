import {Box, Grid} from '@material-ui/core'
import './About.css'

const About = () =>
    <Box className="About">
        <Grid container spacing={2} alignItems="center" justify="center" style={{height:'100vh'}}>
            <Grid item sm={6} xs={12} >
                <img style={{height:'100%', width:'100%'}} alt="Alexis-Poveda" src="https://firebasestorage.googleapis.com/v0/b/alexispoveda.appspot.com/o/alexis-removebg-preview.png?alt=media&token=add0ee7f-47f4-4c60-85b4-15746094aa04"/>
            </Grid>

            <Grid item sm={6} xs={12} >
                <h1>About me</h1>
                <h4>I am a panamanian software engineer who loves to learn new things, be part of a team, 
                    and work hard. My current objective is to offer quality solutions applying web and mobile technology, 
                    under an agile development methodology.
                </h4>
            </Grid>
        </Grid>
    </Box>

export default About