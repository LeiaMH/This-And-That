import React from 'react'

const CartItems = (props) => {
    const { items } = props
    
    const itemList = items.map(item => {
        return (
            <li key={ item.item.id } className="item">
              <span className="item-title"> { item.item.title }  </span>
              <span>x1</span>
              <span className="item-price"> { item.item.price } </span>
            </li>
        )}) 

    return (
        <ul className="item-list">
           <div className="table-headings-container">
             <li className="table-heading">Product Details</li>
             <li className="table-heading">Quantity</li>
             <li className="table-heading">Total</li>
           </div>
           <div className="table-items-container">
              { itemList }   
           </div>  
        </ul>
    )
}

export default CartItems