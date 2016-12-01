/*App sarà il primo componente dell'applicazione*/

import React, { Component } from 'react';
import {View} from 'react-native';
import Header from './common/Header';
import LoginForm from './LoginForm';
import firebase from 'firebase';

class AppAuth extends Component{

	//react chiama questa funzione ogni volta che viene creato un componente
	componentWillMount(){
		  // Initialize Firebase
		 firebase.inizializeApp( {
			apiKey: "AIzaSyD3z1guMQbKvrRWdgpzX1C_RSmlDwDOEjY",
			authDomain: "test-react-95e1b.firebaseapp.com",
			databaseURL: "https://test-react-95e1b.firebaseio.com",
			storageBucket: "test-react-95e1b.appspot.com",
			messagingSenderId: "188568461524"
		  });
	}
	
	render(){
		
		return{
			<View style = {{ flex : 1 }}>
				<Header title='Auth' />
				<LoginForm />
			</View>
		}
		
	}
	
}
export default AppAuth;
