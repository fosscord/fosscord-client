import "react-native-gesture-handler";
import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { registerRootComponent } from "expo";
import "expo-asset";
import store from "./util/store";
import { Text, View } from "react-native";
import { center } from "./styles/";

export default function App() {
	return (
		<Provider store={store}>
			<NativeRouter>
				<Suspense
					fallback={
						<View style={center.center}>
							<Text>Loading...</Text>
						</View>
					}
				>
					<Route exact path="/" component={lazy(() => import("./screens/HomeScreen"))} />
					<Route exact path="/notifications" component={lazy(() => import("./screens/NotificationScreen"))} />
				</Suspense>
			</NativeRouter>
		</Provider>
	);
}

registerRootComponent(App);
