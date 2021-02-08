import {Grid, Paper, Button, ButtonGroup} from '@material-ui/core'
import Pulse from 'react-reveal/Pulse';

const Project = props =>
    <Grid item md={6} sm={12}>
        <Pulse>
            <Paper elevation={10} className="Project">
                <h3>{props.title}</h3>
                <h5>{props.description}</h5>
                <ButtonGroup color="inherit" variant="text" size="large">
                    <Button href={props.demo} target="_blank">Demo</Button>
                    <Button href={props.repo} target="_blank">Repo</Button>
                </ButtonGroup>
            </Paper>
        </Pulse>
    </Grid>

export default Project