import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "react-router-native";

export default function LoginScreen() {
	return (
		<View>
			<Link to={`/Home`}>
				<Text>/Home</Text>
			</Link>
			<TextInput
				autoFocus={true}
				autoCorrect={false}
				clearButtonMode={"always"}
				autoCompleteType="email"></TextInput>
			<TextInput
				autoCorrect={false}
				clearButtonMode={"always"}
				autoCompleteType="password"></TextInput>
		</View>
	);
}
