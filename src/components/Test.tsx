import React from "react";
import { View, Text } from "react-native";
import { Comp } from "./BaseComponent";

export class Test extends Comp {
	run() {
		return (
			<View>
				<Text>test</Text>
			</View>
		);
	}
}
