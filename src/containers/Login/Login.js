import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import classes from './Login.module.css'
import { Input, Form } from 'antd'

export default class Login extends Component {
	state = {
		username: '',
		password: '',
		loggedIn: false,
	}

	componentDidMount() {
		localStorage.clear()
	}

	submitFormHandler = (e) => {
		e.preventDefault()
		const { username, password } = this.state
		if (username === 'admin' && password === 'admin') {
			localStorage.setItem('token', 'asdlfkjsadlfklkjl')
			this.setState({
				loggedIn: true,
			})
		}
	}

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	render() {
		if (this.state.loggedIn) {
			return <Redirect to='/dashboard' />
		}
		return (
			<div className={classes.loginContainer}>
				<h1>Login</h1>

				<Form onSubmit={this.submitFormHandler}>
					<Input
						type='text'
						placeholder='Username'
						name='username'
						value={this.state.username}
						onChange={this.onChangeHandler}
					/>
					<br />
					<br />
					<Input
						type='password'
						placeholder='Password'
						name='password'
						value={this.state.password}
						onChange={this.onChangeHandler}
					/>
					<br />
					<br />
					<button className={classes.loginBtn}>Submit</button>
				</Form>
			</div>
		)
	}
}
