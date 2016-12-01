import React, { Component } from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';

class LoginForm extends Component{
	
	state = {
		email: '',
		password: '',
		error: ''
	};

	onButtonPress(){
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)		
		.then( () => {this.setState({error:'Login effettuato'}); })
		.catch(
			() => {
				firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then( () => {this.setState({error:'Login effettuato'}); })
				.catch( () => {this.setState({error:'Login non valido'}); });
			});
	}
	
	render(){
		return{
			<Card>
				<CardSection>
					<Input 
						label='Email'
						placeholder='user@email.com'
						secureTextEntry={false}
						onChangeText={ email => 
							this.setState({email})}
						value={this.state.email}
						
					/>
				</CardSection>
				<Text>{this.state.error}</Text>
				<CardSection>
						<Input 
						label='Password'
						placeholder='password'
						secureTextEntry
						onChangeText={ password => 
							this.setState({password})}
						value={this.state.password}
						
					/>
				</CardSection>
				<CardSection>
						<Button 
							onPress = {() => {this.onButtonPress();}}
						/>Login</Button>
				</CardSection>
			</Card>
		};
	}
}

export default LoginForm;