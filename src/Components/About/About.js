import {Box, Grid} from '@material-ui/core'
import './About.css'

const About = () =>
    <Box className="About">
        <Grid container spacing={2} alignItems="center" justify="center" style={{height:'100vh'}}>
            <Grid item sm={6} xs={12} >
                <img style={{height:'100%', width:'100%'}} alt="Alexis-Poveda" src="https://firebasestorage.googleapis.com/v0/b/alexispoveda.appspot.com/o/alexis-removebg.png?alt=media&token=3060bfda-a340-4ff7-89b3-b5948b34a08a"/>
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