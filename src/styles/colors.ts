// @ts-nocheck
import { DefaultTheme, ThemedStyledProps } from "styled-components";

export interface ColorProps {
	primary?: boolean;
	secondary?: boolean;
	success?: boolean;
	danger?: boolean;
}

export function getColor(
	props: ThemedStyledProps<ColorProps, DefaultTheme>,
	suffix?: string = ""
): string {
	if (props.primary) return props.theme["primary" + suffix];
	if (props.secondary) return props.theme["secondary" + suffix];
	if (props.danger) return props.theme["danger" + suffix];
	if (props.success) return props.theme["success" + suffix];

	return "white";
}
