// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    form: {
      name: ''
    }
  }

  render() {
    return (
      <div>
        <form action="#">
          <input type="text" value={this.state.form.name}
                 onChange={(event) => this.setState({form: {name: event.target.value}})}/>
        </form>
        <p>{this.state.form.name}</p>
      </div>

    );
  }
}
