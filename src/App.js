
import './App.css';
import Home from './component/Home/Home.js';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Service from './component/Service/Service';
import Project from './component/project/Project';
import ProjectDetail from './component/projectdetail/ProjectDetail'
import ProjectDetail1 from './component/projectdetail1/projectDetail1';
import ProjectDetail2 from './component/projectdetail2/projectDetail2';
import ProjectDetail3 from './component/projectdetail3/ProjectDetail3';
import ProjectDetail4 from './component/projectdetail4/ProjectDetail4';
import ProjectDetail5 from './component/projectdetail5/ProjectDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      

      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        
        <Route path="/service">
          <Service />
        </Route>

        <Route path="/project">
          <Project />
        </Route>
        
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/projectdetail">
          <ProjectDetail />
        </Route>
        
        <Route path="/projectdetail1">
          <ProjectDetail1 />
        </Route>

        <Route path="/projectdetail2">
          <ProjectDetail2 />
        </Route>
        
        
        <Route path="/projectdetail3">
          <ProjectDetail3 />
        </Route>
        
        <Route path="/projectdetail4">
          <ProjectDetail4 />
        </Route>
        
           
        <Route path="/projectdetail5">
          <ProjectDetail5 />
        </Route>

            
       
      </Switch>
    </div>
  </Router>
  )
}

export default App;

