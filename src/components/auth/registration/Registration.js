import React, { Component } from 'react'
import PropTypes from 'prop-types';
import s from './Registration.module.css';
import AuthSection from '../authSection';
import AuthCard from '../authCard';
import Input from '../../UI/input';
import Button from '../../UI/button';

export default class Registration extends Component {
  state = {
    formData: {
      name: '',
      email:  '',
      password: '',
      confirmPassword: '',

    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData)
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState((prevState) => {
      return {
        formData: {
          ...prevState.formData,
          [name]: value,
        },
      };
    });
  };
  render() {
    return (
      <AuthSection as='article'>
      <AuthCard>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit}>


<Input className={s.authInput}
name='name'
placeholder='Name'
onChange={this.handleChange}>
</Input> 
<Input
              className={s.authInput}
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Input
              className={s.authInput}
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.handleChange}
            />
            <Input
              className={s.authInput}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={this.handleChange}
            />
            <Button className= {s.authButton} type="submit">Enter</Button>
        </form>

      </AuthCard>
    </AuthSection>
    )
  }
}



