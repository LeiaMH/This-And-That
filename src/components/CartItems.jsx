import React from 'react'

const CartItems = (props) => {
    const { items } = props
    
    const itemList = items.map(item => {
        return (
            <li key={ item.item.id }>
              <span> { item.item.title }:  </span>
              <span> { item.item.price } </span>
            </li>
        )}) 

    return (
        <ul>
           { itemList }     
        </ul>
    )
}

export default CartItems