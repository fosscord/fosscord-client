import "react-native-gesture-handler";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "expo-asset";
import store from "./util/store";

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// @ts-ignore
function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={() => navigation.navigate("Notifications")} title="Go to notifications" />
		</View>
	);
}

// @ts-ignore
function NotificationsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={() => navigation.navigate("Home")} title="Go back home" />
		</View>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer linking={{ enabled: true, prefixes: [] }}>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen name="Notifications" component={NotificationsScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

// AppRegistry.registerComponent("fosscord", () => App);

registerRootComponent(App);
