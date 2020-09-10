import React from 'react'
import Data from '../data/Furniture-Data'
import AddToCartButton from './AddToCartButton'

const Furniture = () => {
  const itemData =  Data
  const furnitureList = itemData.map(item => 
      <div key={ item.id } className="item-card">
        <h3 className="item-title">{ item.title }</h3>
        <img src={ item.img } alt="product/furniture"/>
        <h4 className="item-price">{ '£ ' + item.price }</h4>
        <p className="item-description">{ item.body }</p>
        <AddToCartButton item={item}/>
      </div>
  )
    
  return(
      <section className="item-container">
        <h1>Furniture</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        { furnitureList }
      </section>
  )
}

export default Furniture