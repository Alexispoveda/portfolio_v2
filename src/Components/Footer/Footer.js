import './Footer.css'

import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import whatsappIcon from '../../assets/whatsapp.svg'
import gmailIcon from '../../assets/gmail.svg'

const Footer = () =>
    <footer>
        <div className="Container">
        <p>Copyright © Alexis Poveda</p>
        <p>Thanks for passing by!</p>
        <div style={{display:'flex', width:'50%', alignItems:'center', justifyContent:'space-evenly'}}>
            <a href="https://github.com/alexispoveda" target="blank_"><img src={githubIcon} alt="githubIcon" width="25vw"/></a>
            <a href="https://instagram.com/alexispoveda" target="blank_"><img src={instagramIcon} alt="instagramIcon" width="25vw"/></a>
            <a href="https://web.whatsapp.com/send?phone=50769988521" target="blank_"><img src={whatsappIcon} alt="whatsappIcon" width="25vw"/></a>
            <a href="mailto:alexispoveda97@gmail.com"><img src={gmailIcon} alt="gmailIcon" width="25vw"/></a>
            <a href="https://linkedin.com/in/alexispoveda" target="blank_"><img src={linkedinIcon} alt="linkedinIcon" width="25vw"/></a>
        </div>
        </div>
    </footer>

export default Footer