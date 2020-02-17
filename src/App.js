import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component'

import './App.css';
import Layout from './hoc/Layout/Layout';
import Newpost from './components/BlogSection/Newpost/Newpost';

const Main = loadable(() => import('./containers/Main/Main'));
const About = loadable(() => import('./containers/About/About'));
const Blog = loadable(() => import('./containers/Blog/Blog'));
const Bottom = loadable(() => import('./components/Navigation/Bottom/Bottom'));


class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
        <Switch>
          <Route path="/" exact render={() =>
             <Fragment>
              <Main />

             </Fragment>
           }/>
          <Route path="/main" exact render={() =>
             <Fragment>
              <Main />
             </Fragment>
           }/>
          <Route exact path="/about-me" render={() =>
             <Fragment>
                <About />
                <Newpost />
                <Bottom />
             </Fragment>}/>
             <Route path="/my-blog"  component={Blog}/>
          <Redirect to="/main" />
        </Switch>
       </Layout>
      </div>
    );
  }
}

export default App;
