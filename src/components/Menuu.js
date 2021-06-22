import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
import { Image, Text, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"font": "16px "
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0 12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"md-flex-direction": "column",
			"text-align": "center",
			"align-self": "baseline"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "77pxт",
			"height": "81px",
			"src": "https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0 0px 0",
			"text-align": "center",
			"font": "--headline1",
			"md-font": "--headline3",
			"padding": "0px 0px 0px 15px",
			"children": "Elikuz Media"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--dark",
			"padding": "6px 12px"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-videointi",
			"children": "Videointi"
		}
	}
};

const Menuu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Text {...override("text")} />
		</Box>
		<Menu {...override("menu")}>
			<Override {...override("menuOverride")} />
			<Override {...override("menuOverride1")} />
			<Override {...override("menuOverride2")} />
			<Override {...override("menuOverride3")} />
		</Menu>
		{children}
	</Section>;
};

Object.assign(Menuu, { ...Section,
	defaultProps,
	overrides
});
export default Menuu;