import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { registerRootComponent } from "expo";
import "expo-asset";
import { Test } from "./components/Test";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Test></Test>
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

AppRegistry.registerComponent("fosscord", () => App);

registerRootComponent(App);

// "start": "react-native start",
// "android": "react-native run-android",
// "ios": "react-native run-ios",
