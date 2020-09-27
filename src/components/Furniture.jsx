import React, { Component } from 'react'
import ItemList from './ItemList'

class Furniture extends Component {
  // state = {
  //   cartItems: []
  // }

  // addItem = (item) => {
  //   console.log('poooo  ', this)
  //   let cartItems = [...this.state.cartItems, item]
  //   this.setState({
  //     cartItems: cartItems
  //   })
  // }
  
  render(){
    return(
      <section className="item-container">
        <h1>Furniture</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        <ItemList type="furniture" addItem={ this.props.addItem }/>
      </section>
    )
  }
}

export default Furniture