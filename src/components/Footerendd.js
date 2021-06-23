import React from "react";
import { useOverrides, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import { Icon, Text, Box, Link, Input, Button, Section } from "@quarkly/widgets";
import { MdAccessibility, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
const defaultProps = {
	"color": "--light",
	"padding": "100px 0",
	"sm-padding": "40px 0",
	"position": "relative",
	"background": "linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"md-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"sm-padding": "64px 0 0 0",
			"margin": "32px 0 0 0",
			"max-width": "360px",
			"position": "relative"
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
			"icon": MdAccessibility
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": <>
				Elisey Kuziakin{"\n\n"}
			</>
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"sm-padding": "64px 0 0 0",
			"margin": "32px 0 0 0",
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
			"icon": MdLocationOn
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"margin": "6px 0",
			"font": "--base",
			"children": "Visit us"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": "Uusikatu 72, A 22\nOulu\nPohjois-Pohjanmaa\nFinland\n90120"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"sm-padding": "64px 0 0 0",
			"margin": "64px 0 0 0",
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
			"icon": MdEmail
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"margin": "6px 0",
			"font": "--base",
			"children": "Email us"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": <Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
				contact@elikuz.com
			</Link>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://instagram.com/elikuzmedia",
			"border-color": "#ffffff",
			"color": "#ffffff",
			"font": "--headline3",
			"display": "block",
			"target": "_blank",
			"children": "Instagram"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://www.fiverr.com/eliseykuziakin",
			"border-color": "#ffffff",
			"color": "#ffffff",
			"font": "--headline3",
			"display": "block",
			"target": "_blank",
			"children": "Fiverr"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"padding": "0 0 0 64px",
			"margin": "64px 0 0 0",
			"max-width": "360px",
			"position": "relative"
		}
	},
	"icon3": {
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
	"text5": {
		"kind": "Text",
		"props": {
			"as": "h4",
			"margin": "6px 0",
			"font": "--base",
			"children": "Call us"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"children": "046 555 3684"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"md-width": "100%"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"max-width": "360px",
			"padding": "56px 48px",
			"margin": "0 0 0 auto",
			"md-max-width": "100%",
			"background": "--color-primary"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "0 0 20px 0",
			"children": "Leave us message"
		}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"endpoint": "https://formspree.io/f/mwkalapg",
			"completeText": "Thank you for message!"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {
			"gap": "16px"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Name"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"width": "100%",
			"name": "name"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Email"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"width": "100%",
			"type": "email",
			"name": "email"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Message"
		}
	},
	"input2": {
		"kind": "Input",
		"props": {
			"as": "textarea",
			"rows": "4",
			"width": "100%",
			"name": "message"
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"background": "--color-dark",
			"children": "Send"
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
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Box {...override("box")}>
					<Icon {...override("icon")} />
					<Text {...override("text")} />
				</Box>
				<Box {...override("box1")}>
					<Icon {...override("icon1")} />
					<Text {...override("text1")} />
					<Text {...override("text2")} />
				</Box>
				<Box {...override("box2")}>
					<Icon {...override("icon2")} />
					<Text {...override("text3")} />
					<Text {...override("text4")} />
					<Link {...override("link")} />
					<Link {...override("link1")} />
				</Box>
				<Box {...override("box3")}>
					<Icon {...override("icon3")} />
					<Text {...override("text5")} />
					<Text {...override("text6")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Box {...override("box4")}>
					<Text {...override("text7")} />
					<Formspree {...override("formspree")}>
						<Stack {...override("stack1")}>
							<StackItem {...override("stackItem2")}>
								<Override {...override("stackItemOverride1")} />
								<Text {...override("text8")} />
								<Input {...override("input")} />
							</StackItem>
							<StackItem {...override("stackItem3")}>
								<Override {...override("stackItemOverride2")} />
								<Text {...override("text9")} />
								<Input {...override("input1")} />
							</StackItem>
							<StackItem {...override("stackItem4")}>
								<Override {...override("stackItemOverride3")} />
								<Text {...override("text10")} />
								<Input {...override("input2")} />
							</StackItem>
							<StackItem {...override("stackItem5")}>
								<Button {...override("button")} />
							</StackItem>
						</Stack>
					</Formspree>
				</Box>
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