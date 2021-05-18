import React, { Component } from 'react'

export default class InputTraining extends Component {
  state = {
    inputValue: 'qweqre',
    name: '',
    tag: '',
  };

  // handleChange = event => {
  // const {name, value} = event.currentTarget;

  //   this.setState({
  //     [name]: value
  //   })
  // }
  



  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value});
  }
  handleTagChange = event => {
    this.setState({ tag: event.currentTarget.value});
  }

  render() {
    return (
      <div>
        <form>
          <label> Name <input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
          </label>
          <label> Surname <input type='text' value={this.state.tag} onChange={this.handleTagChange}></input>

          </label>
        </form>
        {/* <input type='text' value={this.state.inputValue} onChange={this.handleInputChange}/> */}
      </div>
    )
  }
}
