import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	interface DefaultTheme {
		primary: string;
		primaryShade: string;
		primaryHover: string;
		primaryActive: string;
		secondary: string;
		secondaryHover: string;
		success: string;
		danger: string;
		dangerHover: string;
		text: string;
		backgroundPrimary: string;
		backgroundSecondary: string;
		backgroundTertiary: string;
		backgroundFloating: string;
		interactive: string;
		interactiveActive: string;
		interactiveHover: string;
	}
}

export const defaultTheme: DefaultTheme = {
	primary: "#7289da",
	primaryShade: "#5c6fb1",
	primaryHover: "#6c6fb1",
	primaryActive: "#4e5d94",
	secondary: "#747f8d",
	secondaryHover: "",
	success: "#43b581",
	danger: "#f04747",
	dangerHover: "",
	text: "#ffffff",
	backgroundPrimary: "#36393f",
	backgroundSecondary: "#2f3136",
	backgroundTertiary: "#202225",
	backgroundFloating: "#18191c",
	interactive: "#b9bbbe",
	interactiveActive: "#ffffff",
	interactiveHover: "#dcddde",
};
