import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer from "./Footer";
const defaultProps = {};
const overrides = {};

const Footer2 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer {...rest}>
		<Override slot="text6">
			046 555 3684
		</Override>
		{children}
	</Footer>;
};

Object.assign(Footer2, { ...Footer,
	defaultProps,
	overrides
});
export default Footer2;