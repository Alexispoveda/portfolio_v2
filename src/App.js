import './App.css';
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer'

import {Box} from '@material-ui/core'

const App = () => {
  return (
    <Box width="100vw">
      <Header/>
      <Projects/>
      <About/>
      <Footer/>
    </Box>
  );
}

export default App;
