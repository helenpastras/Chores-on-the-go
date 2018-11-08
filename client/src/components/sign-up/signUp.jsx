import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./sign-up.css";
import { Container, Row, Col } from 'reactstrap';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			firstName: '',
			houseName: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	//handleSubmit(chores){
	//   chores.preventDefault();
	//  console.log('sign-up-form, username: ');
	//   console.log(this.state.username);
	//   axios.post('/'), {
	//      username: this.state.username,
	//       password: this.state.password
	//  }
	//   .then(response => {
	//       console.log(response);
	//       if (response.data) {
	//           console.log('successful SignUp');
	//          this.setState({
	//               redirectTO: '/login'
	//          })
	//      } else {
	//           console.log('Sign-up error');
	//      }
	//   }).catch(error => {
	//       console.log('sign up server error:');
	//      console.log(error);
	//  })
	//};
	handleChange(chores) {
		this.setState({
			[chores.target.name]: chores.target.value
		})
	}
	handleSubmit(chores) {
		chores.preventDefault()
		// TODO - validate!
		axios
			.post('/register', {
				email: this.state.email,
				username: this.state.username,
				firstName: this.state.firstName,
				houseName: this.state.houseName,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/log-in'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<Container>
				<Row>
					<Col lg={{ size: 5, offset: 3 }}>
						<input
							type="text"
							name="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							name="firstName"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
						<label>
							<h5>House Name:</h5>
        					<select value={this.state.value} onChange={this.handleChange}>
								{/* options={[
									{ id: "1", label: "4414Kinross" },
									{ id: "6", label: "14060Marquesas" },
									{ id: "9", label: "123NewHouse" },
								]} */}
								<option value="1" data-id="1">4414Kinross</option>
								<option value="6" data-id="6">14060Marquesas</option>
							</select>
						</label>
						<input
							// change input to select 
							// import houseNames with the id to display on the dropdown select
							// once selected, pass the id to the value
							type="text"
							name="houseName"
							placeholder="House Name"
							value={this.state.houseName}
							onChange={this.handleChange}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={this.state.confirmPassword}
							onChange={this.handleChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={{ size: 4, offset: 4 }}>
						<button onClick={this.handleSubmit}>Create Account</button>
					</Col>
				</Row>
			</Container>



		)
	}
}

export default SignupForm;

