import {Box, IconButton} from '@material-ui/core'
import './Header.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

const iconStyle = {
    fontSize: window.innerWidth > 600 ? '6vw' : '5vh',
    color:'black'
}

const rrss = [
    {
        logo: <GitHubIcon style={iconStyle}/>,
        link: 'https://github.com/alexispoveda'
    },
    {
        logo: <LinkedInIcon style={iconStyle}/>,
        link: 'https://linkedin.com/in/alexispoveda'
    },
    {
        logo: <TwitterIcon style={iconStyle}/>,
        link: 'https://twitter.com/alexispovedaa'
    },
    {
        logo: <InstagramIcon style={iconStyle}/>,
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
                    <IconButton key={rs.link} href={rs.link} target="_blank" >
                        {rs.logo}
                    </IconButton>
                )}
            </Box>
        </Zoom>
        
        <Jump forever>
            <IconButton onClick={()=>window.scroll({top:window.innerHeight})}>
                <ExpandMoreIcon style={iconStyle}/>
            </IconButton>
        </Jump>

    </Box>

export default Header