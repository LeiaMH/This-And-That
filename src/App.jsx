import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Furniture from './components/Furniture'
import Navbar from './components/Navbar'
import Plants from './components/Plants'
import Welcome from './components/Welcome'
import Stationary from './components/Stationary'
import Shoppingcart from './components/Shoppingcart'

class App extends Component {
  state = {
    items: [{name:'booo', price:'4,25'}]
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/Furniture' component={Furniture} />
            <Route path='/Plants' component={Plants} />
            <Route path='/Stationary' component={Stationary} />
            <Route path='/Shoppingcart' component={Shoppingcart} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;