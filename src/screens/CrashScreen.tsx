import React, { ErrorInfo } from "react";
import { Text } from "react-native";

class CrashScreen extends React.Component {
	public state = { hasError: false };

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// log error and send error to analytics
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<Text style={{ fontSize: 34, color: "red" }}>
					Fosscord client crashed.
				</Text>
			);
		}

		return this.props.children;
	}
}
