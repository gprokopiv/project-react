import React, { Component } from 'react';
import AuthSection from '../authSection/';
import AuthCard from '../authCard/';
import Input from '../../UI/input/';

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
placeholder='Password'
onChange={this.handleChange}
/>

</form>
        </AuthCard>

      </AuthSection>
      
    )
  }
}
