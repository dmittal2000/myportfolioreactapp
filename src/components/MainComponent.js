import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Education from './EducationComponent';
import { TransitionGroup } from 'react-transition-group';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
                )
            }
        return (
            <div>
                <Header />
                <TransitionGroup>
                   
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/about" component={()=> <About />} />
                            <Route exact path="/education" component={()=> <Education />} />
                            <Redirect to="/home" />
                        </Switch>
                  
                </TransitionGroup>
            </div>
        )
    }
}

export default Main