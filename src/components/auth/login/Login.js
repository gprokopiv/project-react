import React, { Component } from 'react';
import AuthSection from '../authSection/';
import AuthCard from '../authCard/';
import Input from '../../UI/input/';
// import Title from '../../UI/typography/title';
import PrimaryButton from '../../UI/button/Button';
import s from './Login.module.css';

export default class Login extends Component {
state = {
  formData: {
    login: '',
    password: '',
  },
};
handleSubmit =(event) => {
  event.preventDefault();
  // console.log(this.state.formData);
}

handleChange = (event) => {
  const { value, name} = event.target;

  this.setState((prevState) => {
    return {
      formData: {
...prevState.formData,
[name]: value, 
      }, 
    }
  }

  )
}
  render() {
    return (
      <AuthSection as="article">
        <AuthCard>
{/* <Title className={s.authStyle}> Login</Title> */}
<h1>Login</h1> 
<form onSubmit={this.handleSubmit}> 

<Input 
className={s.authInput}
name='login'
placeholder='Login'
onChange={this.handleChange}
/>

<Input 
className={s.authInput}
name='password'
placeholder='password'
onChange={this.handleChange}
/>

<PrimaryButton className={s.authButton} type="submit"> 
Enter
</PrimaryButton>
</form>
        </AuthCard>

      </AuthSection>
      
    )
  }
}
