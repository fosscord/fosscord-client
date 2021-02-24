import * as React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

export default function HomeScreen() {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Link to={`/Login`}>
				<Text>/Login</Text>
			</Link>
		</View>
	);
}
