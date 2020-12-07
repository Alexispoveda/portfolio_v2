import {Box, IconButton} from '@material-ui/core'
import './Header.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

const rrss = [
    {
        logo: <GitHubIcon style={{fontSize:'6vw',color:'black'}}/>,
        link: 'https://github.com/alexispoveda'
    },
    {
        logo: <LinkedInIcon style={{fontSize:'6vw',color:'black'}}/>,
        link: 'https://linkedin.com/in/alexispoveda'
    },
    {
        logo: <TwitterIcon style={{fontSize:'6vw',color:'black'}}/>,
        link: 'https://twitter.com/alexispovedaa'
    },
    {
        logo: <InstagramIcon style={{fontSize:'6vw',color:'black'}}/>,
        link: 'https://instagram.com/alexispoveda'
    }
]

const Header = () =>
    <Box className="Header">
        <Zoom right duration={1200}>
            <h1>Alexis Poveda</h1>
        </Zoom>

        <Zoom left duration={1200}>
            <h2>Software Engineer</h2>
        </Zoom>

        <Zoom right duration={1200}>
            <Box display="flex" width="80vw" justifyContent="space-evenly">
                {rrss.map(rs=>
                    <IconButton key={rs.link} href={rs.link} target="_blank">
                        {rs.logo}
                    </IconButton>
                )}
            </Box>
        </Zoom>
        
        <Jump forever>
            <IconButton onClick={()=>window.scroll({top:window.innerHeight})}>
                <ExpandMoreIcon style={{fontSize:'6vw',color:'black',margin:'1vh'}}/>
            </IconButton>
        </Jump>

    </Box>

export default Header