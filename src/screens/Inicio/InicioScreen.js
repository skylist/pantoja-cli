import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const InicioScreen =({}) => {
	return (
		<View style={styles.container}>
			<Text>InicioScreen criado via pantoja-cli</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1
	}
})

InicioScreen.propTypes = {
	
}

InicioScreen.defaultProps = {

}

export default InicioScreen