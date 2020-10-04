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

  addItem = ({ item }) => {
   
    if(this.state.cartItems.some(cartItem => cartItem.id === item.id)){
     console.log('not new')
     const cartItems = this.state.cartItems.map(
      cartItem => cartItem.id === item.id 
      ? { ...cartItem, count: cartItem.count+1 } 
      : cartItem 
      )

     this.setState({
      cartItems: cartItems
    })
    }else{
     console.log('new')
     const newItem = {...item, count: 1}
     const cartItems = [...this.state.cartItems, newItem]
     this.setState({
      cartItems: cartItems
    })
    }

    // let newItem = {...item, count: 0}
    // let cartItems = [...this.state.cartItems, newItem]
    // this.setState({
    //   cartItems: cartItems
    // })


    // let cartItems = [...this.state.cartItems, item]
    // this.setState({
    //   cartItems: cartItems
    // })
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
            <Route path='/:item_id' render={(props) => (<ItemPage {...props} addItem={ this.addItem } />)} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;