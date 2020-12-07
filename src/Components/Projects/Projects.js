import {useEffect, useState} from 'react'

import {Box, Grid} from '@material-ui/core'
import Project from './Project'

import {db} from '../../firebase'
import './Projects.css'

const Projects = () =>{

    const [ProjectsState, setProjectsState] = useState([])

    const ref = db.ref()

    useEffect(()=>{

        const projects = ref.child('projects');

        projects.on('value', snapshot=>{
            setProjectsState(snapshot.val())
        })
    },[ref])

    return(
        <Box className="Projects">
            <Grid container spacing={4}>
                {
                    ProjectsState.map(project=>
                        <Project
                        key={project.title} 
                        repo={project.repo} 
                        demo={project.demo}
                        description={project.description}
                        title={project.title}
                        />
                    )
                }
            </Grid>
        </Box>
    )
}

export default Projects