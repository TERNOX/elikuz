import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Icon, Text, Box, Link, Section } from "@quarkly/widgets";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
const defaultProps = {
	"color": "--light",
	"sm-padding": "40px 0",
	"position": "relative",
	"background": "linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0.jpg?v=2021-06-25T22:51:12.820Z) 0% 65%/cover",
	"flex-direction": "row",
	"inner-max-width": "1437px",
	"padding": "100px 0 100px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"margin": "40px 0 20px 0",
			"justify-content": "space-around",
			"sm-flex-direction": "column",
			"width": "100%",
			"sm-justify-content": "space-around",
			"sm-align-items": "flex-start",
			"md-display": "block"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"padding": "10px",
			"sm-width": "90%"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"sm-padding": "0 0 0 64px",
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
	"box3": {
		"kind": "Box",
		"props": {
			"padding": "10px",
			"sm-width": "90%"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"sm-padding": "0 0 0 64px",
			"max-width": "360px",
			"position": "relative",
			"lg-padding": "34px 0 0 0"
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
			</Link>
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"padding": "10px",
			"sm-width": "90%"
		}
	},
	"box6": {
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
	"box7": {
		"kind": "Box",
		"props": {
			"padding": "10px",
			"sm-width": "90%"
		}
	},
	"box8": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"order": "0",
			"flex": "0 0 auto",
			"display": "flex",
			"sm-justify-content": "center",
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
			align-items="flex-start"
			flex-wrap="no-wrap"
			align-content="flex-start"
		/>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Box {...override("box2")}>
					<Icon {...override("icon")} />
					<Text {...override("text")} />
				</Box>
			</Box>
			<Box {...override("box3")}>
				<Box {...override("box4")}>
					<Icon {...override("icon1")} />
					<Text {...override("text1")} />
				</Box>
			</Box>
			<Box {...override("box5")}>
				<Box {...override("box6")}>
					<Icon {...override("icon2")} />
					<Text {...override("text2")} />
					<Text {...override("text3")} />
				</Box>
			</Box>
			<Box {...override("box7")}>
				<Box {...override("box8")} />
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Footerendd, { ...Section,
	defaultProps,
	overrides
});
export default Footerendd;