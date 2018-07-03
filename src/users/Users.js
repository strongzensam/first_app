import React, { Component } from 'react';
import User from './User';

class Users extends Component {
	state = {
		users: [
		{name:"Jack", age: 20},
		{name:"Jill", age: 30},
		{name:"Peter", age: 40}
		],
		title: "Cool List"

	};
	makeMeYounger = () => {
		const newState =this.state.users.map((user) => {
			const tempUser = user;
			tempUser.age -=10;
			return tempUser;

		});
		this.setState({
			newState
		});
	}	
	makeMeOlder = () => {
		const newState =this.state.users.map((user) => {
			const tempUser = user;
			tempUser.age +=10;
			return tempUser;

		});
		this.setState({
			newState
		});
	}	
	// reset = () => {
	// 	this.setState(){
	// 		users = [
	// 	{name:"Jack", age: 20},
	// 	{name:"Jill", age: 30},
	// 	{name:"Peter", age: 40}
	// 	];
	// }
	// 	const newState = this.state.users
	// 	this.setState({
	// 		newState
	// 	});
	// }	
	eraseFirstLetter = () => {
		const newState = this.state.users.map((user) => {
			const tempUser = user;
			tempUser.name = tempUser.name.slice(1);
			return tempUser;

		});
		this.setState({
			newState
		});
	}

		render(){
			return (
				<div>
				<br/>
				<button onClick={this.makeMeYounger}>Make us 10 years younger</button>
				<br/>
				<button onClick={this.makeMeOlder}>Make us 10 years older</button>
				<br/>
				<button onClick={this.eraseFirstLetter}>Erase first letter</button>
				<h1>{this.state.title}</h1>
				{
					this.state.users.map((user) => {
						return <User age={user.age}>{user.name}</User>
						
					})
				}



				</div>
				)
		}

	}

	export default Users;