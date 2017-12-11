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
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={App}/>
      <Route path="/about-me" component={About}/>
      <Route path="/sample" component={Sample}/>
      <Route path="/freelance" component={Freelance}/>
      <Route path="/students" component={Students}/>
      <Footer />
    </div>
  </Router>
);

export default Routes;
