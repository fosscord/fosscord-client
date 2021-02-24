import * as React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

function NotificationScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Link to={`/`}>
				<Text>Go back home</Text>
			</Link>
		</View>
	);
}

export default NotificationScreen;
