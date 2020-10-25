import React, { Component } from 'react'
import ItemData from '../data/ItemData'
import AddToCartButton from './AddToCartButton'

class ItemPage extends Component {
     state = {}

    componentWillMount(){
        let id = this.props.match.params.item_id;
        let item = ItemData.filter(item => item.id === id)[0];
        this.setState({
            ...item 
        })
    }

    render() {
        const item = this.state
        return (
            <section className="item-page-container">
                <h1>{ this.state.title }</h1>
                <div className="item-info-container">
                   <div className="item-info-left">
                       <img className="item-image" src={require(`../data/${this.state.img}`)} alt="product"/>
                   </div>
                   <div className="item-info-right">
                       <h4 className="item-price">{ '£ ' + this.state.price }</h4>
                       <p>{ this.state.body }</p>
                       <AddToCartButton item={ item } addItem={ this.props.addItem }/> 
                   </div> 
                </div> 
            </section>
        )
    }
}

export default ItemPage