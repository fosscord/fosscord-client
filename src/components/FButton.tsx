import React from "react";
import { ColorProps, getColor } from "../styles";
import { TouchableHighlightProps, View } from "react-native";
import styled from "styled-components/native";

export type FButtonProps = TouchableHighlightProps &
	ColorProps & {
		title?: string;
		children?: React.ReactNode;
	};

export const ButtonContainer = styled.Button`
	background: ${(props: any) => getColor(props)};
	border-radius: 3px;
	padding: 2px 16px;
	min-width: 60px;
	min-height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	color: ${(props: any) => props.theme.text};
`;

export function FButton({
	onPress,
	title,
	children,
	primary,
	secondary,
	danger,
	success,
}: FButtonProps) {
	return (
		<ButtonContainer
			onPress={onPress}
			{...{ primary, secondary, danger, success }}>
			<View>
				{console.log(title)}
				<ButtonText>{title}</ButtonText>
				{children}
			</View>
		</ButtonContainer>
	);
}
