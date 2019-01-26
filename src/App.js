import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home.js';
import Services from './Pages/Services/Services';
import Machinery from './Pages/Machinery/Machinery.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import Expertise from './Pages/About/Expertise';
import createHashHistory from 'history/createHashHistory';



class App extends Component {
  render() {
    const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
    return (
      <Router history={hashHistory}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/machinery" component={Machinery} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/expertise" component={Expertise} />
            {/* <Route path="/hello" component={Hello} />
            <Route path="/hello/goodmorning" render={() => { return <h1>Goodmorning</h1> }} />
            <Route path="/books" component={Books} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
