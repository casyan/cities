import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import Firebase from 'firebase';
import CityDetails from './CityDetails';

class CityList extends Component{
	
	//dentro cities avrò la stessa struttura del json che mi viene dal DB
	state = { cities : [] };
	
	//carico la lista di città
	componentWillMount(){
		//'value' notifica qualsiasi tipo di evento al DB, ci si può anche riferire ad un evento particolare
		firebase.database().ref('cities').on('value', snapshot => {
			const cityList = [];
			snapshot.forEach(child => {
				const city = child.val();
				cityList.push(city);
			});
			this.setState({cities : cityList});
		});
		
	}
	
	renderCities(){
		return this.state.cities.map (city => {
			//gli elemnti dell'array devono avere una propr key univoca
			<CityDetails key={city.title} city={city} />
		});
		
	}
	
	render(){
		return{
			<ScrollView>
				{this.renderCities()}
			</ScrollView>
		};
	}
	
}

export default CityList;