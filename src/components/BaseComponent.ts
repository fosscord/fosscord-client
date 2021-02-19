import { Component, ReactNode, ErrorInfo } from "react";

export abstract class Comp extends Component {
	public firstNodes: ReactNode[] = [];
	public lastNodes: ReactNode[] = [];

	constructor(props: Readonly<any> & Readonly<{ children?: ReactNode }>, context: any) {
		super(props, context);
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error(error, info.componentStack);
		// TODO: show toast
		// TODO: if it is a error from a plugin process it
	}

	public abstract run(): ReactNode;

	public render() {
		console.log(this);
		const result = this.run() || [];
		const resultArray = Array.isArray(result) ? result : [result];

		return [...this.firstNodes, ...resultArray, ...this.lastNodes];
	}
}
