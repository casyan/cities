import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = (props) => {
	
	return{
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{props.label}</Text>
			<TextInput 
				secureTextEntry={props.secureTextEntry} 
				placeholder={props.placeholder} 
				autoCorrect={false}
				style={styles.inputStyle}
				value={props.value}
				onChangeText={props.onChangeText}
			/>
		</View>	
	};
	
};

const styles = {
	containerStyle:{
		height:40,
		flexDirection:'row',
		alignItems:'center',
		flex:1
	},
	labelStyle:{
		fontSize:18,
		paddingLeft:20,
		flex:1
	},
	inputStyle:{
		color:'#000',
		fontSize:10,
		lineHeight:23,
		paddingRight:5,
		paddingLeft:5,
		flex:2
	}
}

export default Input;