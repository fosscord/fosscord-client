import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Appearance, ToastAndroid, Platform, AppRegistry } from "react-native";
// import registerRootComponent from "expo/build/launch/registerRootComponent";

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

AppRegistry.registerComponent(App);
