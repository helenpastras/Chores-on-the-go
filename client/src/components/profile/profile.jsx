import React, { Component } from 'react';
import './profile.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import profile from 'material-ui/AutoComplete';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
				username: '',
				firstName: '',
				houseName: '',
				password: ''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <TextField
             title="profile"
           />
           <TextField
             hintText="Enter your username"
             floatingLabelText="username"
             onChange = {(chores,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your firstName"
             floatingLabelText="firstName"
             onChange = {(chores,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(chores,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(chores,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type = "houseName"
             hintText="Enter your houseName"
             floatingLabelText="houseName"
             onChange = {(chores,newValue) => this.setState({houseName:newValue})}
             />
           <br/>
           <profile label="Submit" primary={true} style={style} onClick={(chores) => this.handleClick(chores)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Profile;
