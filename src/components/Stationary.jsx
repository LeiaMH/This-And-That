import React, { Component } from 'react'
import ItemList from './ItemList'

class Stationary extends Component {
  
  render(){
    return(
      <section className="item-container">
        <h1>Stationary</h1>
        <p className="section-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius deserunt laborum repellat quae est pariatur adipisci facere recusandae, voluptatum magni beatae. Sunt voluptates ullam distinctio repellendus molestiae qui hic.</p>
        <ItemList type="stationary" addItem={ this.props.addItem }/>
      </section>
    )
  }
}

export default Stationary