import React from "react";
import { Button, ButtonProps } from "react-native";

export type FButtonProps = ButtonProps & {
	test: boolean;
};

export function FButton(props: FButtonProps) {
	return <Button {...props}></Button>;
}
