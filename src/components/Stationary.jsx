import React from 'react'
import Data from '../data/Stationary-Data'
import AddToCartButton from './AddToCartButton'

const Stationary = () => {
  const itemData =  Data
  const stationaryList = itemData.map(item => 
      <div key={ item.id } className="item-card">
        <h4 className="item-title">{ item.title }</h4>
        <img src={ item.img } alt="product/stationary"/>
        <p className="item-description">{ item.body }</p>
        <AddToCartButton />
      </div>
  )
    
  return(
      <section className="item-container">
        <h1>Stationary</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        { stationaryList }
      </section>
  )
}

export default Stationary