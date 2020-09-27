import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Furniture from './components/Furniture'
import Navbar from './components/Navbar'
import Plants from './components/Plants'
import Welcome from './components/Welcome'
import Stationary from './components/Stationary'
import Shoppingcart from './components/Shoppingcart'
import ItemPage from './components/ItemPage';

class App extends Component {
  state = {
    cartItems: []
  }

  addItem = (item) => {
    let cartItems = [...this.state.cartItems, item]
    this.setState({
      cartItems: cartItems
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/Furniture' render={(props) => (<Furniture {...props} addItem={ this.addItem } />)}/>
            <Route path='/Plants' render={(props) => (<Plants {...props} addItem={ this.addItem } />)}/>
            <Route path='/Stationary' render={(props) => (<Stationary {...props} addItem={ this.addItem } />)}/>
            <Route path='/Shoppingcart' render={(props) => (<Shoppingcart {...props} addItems={ this.state } />)}/>
            <Route path='/:item_id' component={ItemPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;