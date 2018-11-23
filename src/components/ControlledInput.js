import React, { Component } from 'react'

class Form extends Component {

    state = {
        firstName: 'John',
        lastName: 'Henry'
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render () {
        return (
            <form>
                <input onChange={event => this.handleChange(event)} type='text' name='firstName' value={this.state.firstName} />
                <input onChange={event => this.handleChange(event)} type='text' name='lastName' value={this.state.lastName} />
            </form>
        )
    }
}

export default Form