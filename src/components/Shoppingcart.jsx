import React, { Component } from 'react'
import CartItems from './CartItems'

class Shoppingcart extends Component{
  state = {
    items: null
  }

  updateItems = () => {
    this.setState({
      item: [{name: 'floof', price: '1,50'}, {name: 'shloof', price: '13,50'}]
  })
  }

  render() {
    return (
      <section className="cart-container">
        <h1>Your Shopping Cart</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        <CartItems items={ this.state.items }/>
      </section>
    )
  }
}

export default Shoppingcart