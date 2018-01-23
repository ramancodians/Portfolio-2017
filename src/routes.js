import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from './components/Navigation';
import App from './app';
import About from './components/About';
import Footer from './components/Footer';
import Students from './components/Students';
import Freelance from './components/Freelancing';
import Sample from './components/Sample';
import 'styles/index.scss';

const Routes = () => (
  <Router
    onEnter={(e) => {console.log("asdasdasdasdasda")}}
    onUpdate={(e) => {console.log("asdasdasdasdasda")}}
  >
    <div>
      <Navigation />
      <div className="pages">
        <Route exact path="/" component={App}/>
        <Route path="/about-me" component={About}/>
        <Route path="/sample" component={Sample}/>
        <Route path="/freelance" component={Freelance}/>
        <Route path="/students" component={Students}/>
        <Footer />
      </div>
    </div>
  </Router>
);

export default Routes;
