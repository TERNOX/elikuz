import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Icon, Text, Box, Link, Section } from "@quarkly/widgets";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
const defaultProps = {
	"color": "--light",
	"padding": "100px 0",
	"sm-padding": "40px 0",
	"position": "relative",
	"background": "linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0.jpg?v=2021-06-25T22:51:12.820Z) 0% 65%/cover",
	"flex-direction": "row"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"justify-content": "flex-start",
			"flex-wrap": "no-wrap",
			"width": "100%",
			"align-content": "flex-start",
			"align-items": "flex-start"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"md-width": "100%",
			"display": "block",
			"overflow-x": "visible",
			"overflow-y": "visible",
			"order": "0",
			"flex": "1 1 0%",
			"width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "row",
			"flex-wrap": "no-wrap",
			"align-items": "flex-start",
			"align-content": "flex-start",
			"justify-content": "center"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"sm-padding": "64px 0 0 0",
			"max-width": "360px",
			"position": "relative",
			"padding": "0 0 0 64px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"position": "absolute",
			"size": "48px",
			"top": "0",
			"left": "0",
			"category": "md",
			"icon": MdLocationOn
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": <>
				Uusikatu 72, A 22
				<br />
				Oulu 90120
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"md-width": "100%",
			"display": "block",
			"overflow-x": "visible",
			"overflow-y": "visible",
			"order": "0",
			"flex": "1 1 0%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "row",
			"flex-wrap": "no-wrap",
			"align-items": "flex-start",
			"width": "25%",
			"align-content": "flex-start",
			"justify-content": "center"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"sm-padding": "64px 0 0 0",
			"max-width": "360px",
			"position": "relative"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"position": "absolute",
			"size": "48px",
			"top": "0",
			"left": "0",
			"category": "md",
			"icon": MdEmail
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": <Link
				href="mailto:hello@company.com"
				text-decoration="none"
				hover-text-decoration="underline"
				color="--light"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				contact@elikuz.com
				<br />
				<br />
			</Link>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"background": "url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/Fiverr-Emblem.png?v=2021-06-25T21:51:27.114Z) 0% 0% /100% repeat scroll padding-box"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"md-width": "100%",
			"display": "block",
			"overflow-x": "visible",
			"overflow-y": "visible",
			"order": "0",
			"flex": "1 1 0%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "row",
			"flex-wrap": "no-wrap",
			"align-items": "flex-start",
			"align-content": "flex-start",
			"justify-content": "center"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"max-width": "360px",
			"position": "relative"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"position": "absolute",
			"size": "48px",
			"top": "0",
			"left": "0",
			"category": "md",
			"icon": MdPhone
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"display": "block",
			"children": <>
				Elisey Kuziakin{"\n\n"}
			</>
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": "046 555 3684"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"md-width": "100%",
			"display": "block",
			"overflow-x": "visible",
			"overflow-y": "visible",
			"order": "0",
			"flex": "1 1 0%",
			"children": <>
				<Link
					href="https://instagram.com/elikuzmedia"
					border-color="#ffffff"
					color="#ffffff"
					font="--headline3"
					display="block"
					target="_blank"
					background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/insta.png?v=2021-06-25T22:57:42.759Z) 0% 0% /cover repeat scroll padding-box"
					height="48px"
					width="48px"
					margin="0px 4px 0px 4px"
				/>
				<Link
					href="https://www.fiverr.com/eliseykuziakin"
					border-color="#ffffff"
					color="#ffffff"
					font="--headline3"
					display="block"
					target="_blank"
					background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/fiverr.png?v=2021-06-25T22:57:42.759Z) 0% 0% /cover repeat scroll padding-box"
					height="48px"
					width="48px"
					margin="0px 4px 0px 4px"
				/>
			</>
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "row",
			"flex-wrap": "no-wrap",
			"align-items": "flex-start",
			"align-content": "flex-start",
			"justify-content": "flex-start"
		}
	}
};

const Footerendd = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			display="flex"
			flex-direction="row"
			width="200%"
			align-items="flex-start"
			flex-wrap="no-wrap"
			align-content="flex-start"
		/>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Box {...override("box")}>
					<Icon {...override("icon")} />
					<Text {...override("text")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Box {...override("box1")}>
					<Icon {...override("icon1")} />
					<Text {...override("text1")} />
					<Link {...override("link")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Box {...override("box2")}>
					<Icon {...override("icon2")} />
					<Text {...override("text2")} />
					<Text {...override("text3")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Footerendd, { ...Section,
	defaultProps,
	overrides
});
export default Footerendd;