// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <input
            type="text"
            placeholder="Band name"
            value={this.state.name}
            onChange={event => this.handleOnChange(event)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
