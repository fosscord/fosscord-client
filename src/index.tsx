import "react-native-gesture-handler";
import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { registerRootComponent } from "expo";
import "expo-asset";
import store from "./util/store";
import { Text, View } from "react-native";
import { center } from "./styles/";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
	return (
		<Provider store={store}>
			<NativeRouter>
				<SafeAreaView>
					<Suspense
						fallback={
							<View style={center.center}>
								<Text>Loading...</Text>
							</View>
						}>
						<Route
							exact
							path="/"
							component={lazy(
								() => import("./screens/HomeScreen")
							)}
						/>
						<Route
							exact
							path="/login"
							component={lazy(
								() => import("./screens/LoginScreen")
							)}
						/>
					</Suspense>
				</SafeAreaView>
			</NativeRouter>
		</Provider>
	);
}

registerRootComponent(App);
