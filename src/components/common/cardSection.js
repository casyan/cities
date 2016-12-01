import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
	return{
		<View style = {styles.sectionStyle}>
			{props.children}
		</View>
	};
	
};

const styles = {
	sectionStyle:{
		borderBottomWidth:1,
		borderBottomColor:'#ccc',
		padding:5,
		backgroundColor:'#fff',	
		flexDirection: 'row',
		position:'relative',
		justifyContent:'flex-start'
	}
	
}

export default CardSection;