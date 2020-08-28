import React from 'react'

const Shoppingcart = () => {
    const items = [{name: 'boo', price: '2,50'},{name:'moo', price:'3,50'}]
    const itemList = items.map(item => {
        return (
            <li>
              <span> {item.name}:  </span>
              <span> {item.price} </span>
            </li>
        )
    })

    return (
        <section className="cart-container">
          <h1>Your Shopping Cart</h1>
          <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
          <ul>
            { itemList }
          </ul>
       </section>
    )
}

export default Shoppingcart