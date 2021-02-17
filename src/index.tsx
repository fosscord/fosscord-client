import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

registerRootComponent(App);
