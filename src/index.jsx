import React from 'react';
import ReactDOM from 'react-dom'; //todo
import './index.css';
import App from './App'; //todo
import * as serviceWorker from './serviceWorker'; 
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));

<h3>SignUp Form </h3>
<label htmlFor="username">Username: </label>
<input
    type="text"
    name="Username"
    value={this.state.username}
    onchange={this.handleChange}
    />
    handleSubmit(event){
        event.preventDefault()
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
    }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
