import * as React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Link to={`/Notifications`}>
				<Text>Go to notifications</Text>
			</Link>
		</View>
	);
}

export default HomeScreen;
