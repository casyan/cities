import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

const CityDetails = ({city}) => {

	const {title, thumb, image, url} = city;
	return{

		<Card>
	  		<CardSection>
				<View style={styles.thumbContainerStyle}>
					<Image style={styles.thumbStyles} source={{uri: thumb}} />
				</View>
				<View style={styles.titleContainerStyle}>
					<Text style={styles.titleStyle}>{title}</Text>
					<Text>{country}</Text>
				</View>
			</CardSection>				
			<CardSection>
				<Image style={styles.imagesStyles} source={{uri: image}} />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Wikipedia
				</Button>
			</CardSection>
	  	</Card>

	};

}

const styles = {
	thumbStyle:{
		width:50,
		height:50
	},
	imagesStyle:{
		width:null,
		height:300,
		flex:1				
	},
	thumbContainerStyle:{
		marginLeft:10,
		marginRight:10,
		justifyContent:'center',
		alignItems:'center'
	},
	titleContainerStyle:{
		flexDirection: 'column',
		justifyContent:'space-aroud'
	},
	titleStyle:{
		fontSize:20
	}
}
	
};

export default CityDetails;