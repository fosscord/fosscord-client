import React from "react";
import { TextInput, TextInputProps } from "react-native";

export type FTextInputProps = TextInputProps & {
	test: boolean;
};

export function FTextInput(props: FTextInputProps) {
	return <TextInput {...props}></TextInput>;
}
