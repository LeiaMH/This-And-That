import React, { Component } from 'react'

class AddToCartButton extends Component {
    state = {
        item: {title: null,
               price: null,
               id: null,}
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(this.props)
        
        this.setState({
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