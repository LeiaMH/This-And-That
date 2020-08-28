import React, { Component } from 'react'

class Searchbar extends Component {
    state = {
        search: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
    }

    render(){
        return (
            <div className="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="search" onChange={this.handleChange} placeholder="Search..."/>
                </form>    
            </div>
        )
    }
}

export default Searchbar