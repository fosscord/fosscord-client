import React from "react";
import { Platform, Text, View } from "react-native";
import { Link } from "react-router-native";
import { FTextInput } from "../components/FTextInput";

export default function LoginScreen() {
	const formContent = [
		<FTextInput
			key={"inputEmail"}
			autoFocus={true}
			autoCorrect={false}
			textContentType="emailAddress"
			clearButtonMode="always"
			autoCompleteType="email"></FTextInput>,
		<FTextInput
			key={"inputPassword"}
			autoCorrect={false}
			secureTextEntry={true}
			clearButtonMode="always"
			textContentType="password"
			autoCompleteType="password"></FTextInput>,
	];

	return (
		<View>
			<Link to={`/`}>
				<Text>/</Text>
			</Link>
			{Platform.OS === "web" ? <form>{formContent}</form> : formContent}
		</View>
	);
}
