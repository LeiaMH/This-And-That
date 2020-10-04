import React, { Component } from 'react'

class AddToCartButton extends Component {
    
    handleClick = (e) => {
        e.preventDefault()
        this.props.addItem({
            item: {title: this.props.item.title,
                   price: this.props.item.price,
                   id: this.props.item.id,
                   }
        })
    }

    render(){
        return (
            <button className="add-to-cart" onClick={this.handleClick}>Add to cart</button>
        )
    }
}

export default AddToCartButton