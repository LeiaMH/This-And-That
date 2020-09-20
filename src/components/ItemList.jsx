import React, { Component } from 'react'
import Data from '../data/ItemData'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom'

class ItemList extends Component {
  state = {
    cartItems: []
  }

  addItem = (item) => {
    console.log(item)
    let cartItems = [...this.state.cartItems, item]
    this.setState({
      cartItems: cartItems
    })
  }

  render(){
  const itemData =  Data.filter(item => item.type === this.props.type)
  const itemList = itemData.map(item => 
      <div key={ item.id } className="item-card">
        <Link to={ '/' + item.id }>
            <h3 className="item-title">{ item.title }</h3>
        </Link>
        <img src={ item.img } alt="product"/>
        <h4 className="item-price">{ '£ ' + item.price }</h4>
        <p className="item-description">{ item.body }</p>
        <AddToCartButton item={ item } addItem={ this.addItem } />
      </div>
  )
  
    return(
      <div className="list-container">
         { itemList }
      </div>
    )
  }
}

export default ItemList

