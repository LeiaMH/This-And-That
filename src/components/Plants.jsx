import React from 'react'
import ItemList from './ItemList'

const Plants = () => {
  return(
      <section className="item-container">
        <h1>Plants</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        <ItemList type="plants"/>
      </section>
  )
}

export default Plants