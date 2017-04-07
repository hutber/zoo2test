//Core App things
import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router';
import Home from './components/Home';

export default class Routes extends Component {
  render (){
        return (
            <div>
                <Route exact path="/" component={Home}>
                  <Route path="/home" component={Home} />
                </Route>
            </div>
        )
    }
};
