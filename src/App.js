import './App.css';
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About';

import {Box} from '@material-ui/core'

const App = () => {
  return (
    <Box>
      <Header/>
      <Projects/>
      <About/>
    </Box>
  );
}

export default App;
