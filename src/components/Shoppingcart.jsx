import React, { Component } from 'react'
import CartItems from './CartItems'

class Shoppingcart extends Component{
  // state = {
  //   items: null
  // }

  // componentDidMount = () => {
  //   console.log('CCC ', this.props.addItems.cartItems)
  //    let items = [this.props.addItems.cartItems]
  //    this.setState({
  //    items: items
  //   })
  // }

  render() {
    return (
      <section className="cart-container">
        <h1>Your Shopping Cart</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        <CartItems items={ this.props.addItems.cartItems }/>
      </section>
    )
  }
}

export default Shoppingcart