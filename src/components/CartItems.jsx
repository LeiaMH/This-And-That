import React from 'react'

const CartItems = (props) => {
    const { items } = props
    //const items = [{name: 'boo', price: '2,50'},{name:'moo', price:'3,50'}]
    const itemList = items ? (
        items.map(item => {
        return (
            <li key={ item.id }>
              <span> { item.title }:  </span>
              <span> { item.price } </span>
            </li>
        )})) : (
            <li>There are currently no items in your cart.</li>
        )

    return (
        <ul>
           { itemList }     
        </ul>
    )
}

export default CartItems