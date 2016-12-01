/*App sarà il primo componente dell'applicazione*/

import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native';
import Header from './src/components/common/Header';
import CityList from './src/components/CityList';
import Firebase from 'firebase';

class App extends Component{

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
				<Header title='Cities' />
				<CityList />
			</View>
		}
		
	}
	
}
AppRegistry.registerComponent{'cities', () => App}

