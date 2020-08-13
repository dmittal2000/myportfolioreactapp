import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Education from './EducationComponent';
import Contact from './ContactComponent';
import Skill from './SkillComponent';
import { TransitionGroup } from 'react-transition-group';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        
        return (
            <div>
                <Header />
                <TransitionGroup>
                   
                        <Switch>
                            <Route path="/home" component={()=> <Home />} />
                            <Route exact path="/about" component={()=> <About />} />
                            <Route exact path="/education" component={()=> <Education />} />
                            <Route exact path="/contact" component={()=> <Contact />} />
                            <Route exact path="/skills" component={()=> <Skill />} />
                            
                            <Redirect to="/home" />
                        </Switch>
                  
                </TransitionGroup>
            </div>
        )
    }
}

export default Main