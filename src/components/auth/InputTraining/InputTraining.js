import React, { Component } from 'react';
import shortid from 'shortid';


export default class InputTraining extends Component {
  state = {
    inputValue: 'qweqre',
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

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
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  }

  reset = () => {
    this.setState({ name: '',  tag: '', })
  }
  handleLicenceChange = event => {
this.setState({ licence: event.currentTarget.checked })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}> Name 
          <input type='text' value={this.state.name} onChange={this.handleNameChange} id={this.nameInputId}></input>
          </label>
          <label htmlFor={this.tagInputId}> Surname <input type='text' value={this.state.tag} onChange={this.handleTagChange} id={this.tagInputId}></input>
          </label>
          
          <p>Your level:</p>
          <label><input type='radio' name='experience' value='junior' checked={this.state.experience === 'junior'}></input>Junior</label>
          <label><input type='radio' name='experience' value='middle' checked={this.state.experience === 'middle'}></input>Middle</label>
          <label><input type='radio' name='experience' value='senior' checked={this.state.experience === 'senior'}></input>Senior </label>

           <label> <input type='checkbox' name='licence' checked={this.state.licence} onChange={this.handleLicenceChange} ></input>
          Agree</label>
         
             

          <button type='submit' disabled={!this.state.licence}> Send </button>
        </form>
        {/* <input type='text' value={this.state.inputValue} onChange={this.handleInputChange}/> */}
      </div>
    )
  }
}
