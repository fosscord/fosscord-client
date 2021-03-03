import "react-native-gesture-handler";
import React, { Suspense, lazy, useState } from "react";
import { Provider } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import { BrowserRouter } from "react-router-dom";
import { registerRootComponent } from "expo";
import "expo-asset";
import store from "./util/store";
import { Platform, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ButtonContainer, FButton } from "./components";

const Router = Platform.OS === "web" ? BrowserRouter : NativeRouter;

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<SafeAreaProvider>
				<SafeAreaView>
					<Provider store={store}>
						<Router>
							<Suspense
								fallback={
									<View>
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
						</Router>
					</Provider>
				</SafeAreaView>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}

registerRootComponent(App);
