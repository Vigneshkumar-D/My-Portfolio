
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import AboutMeMain from './components/AboutMeMain'
import ProjectsMain from './components/ProjectsMain';
import SkillsMain from './components/SkillsMain';
import ContactMeMain from './components/ContactMeMain';

import './App.css';
import { Component } from 'react';

class App extends Component {


render(){
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={AboutMeMain} />
      <Route exact path="/projects" component={ProjectsMain} />
      <Route exact path="/skills" component={SkillsMain} />
      <Route exact path="/contact-me" component={ContactMeMain} />
  </Switch>
  );
  }
}

export default App;
