import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Image, Text, Box, Section } from "@quarkly/widgets";
import QuarklycommunityKitMenuWithGroups from "./QuarklycommunityKitMenuWithGroups";
import { IoIosArrowDown } from "react-icons/io";
const defaultProps = {
	"background": "--color-darkL2",
	"padding": "64px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "33%",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"color": "--dark",
			"background": "--color-darkL2",
			"flex-direction": "column"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"height": "81px",
			"src": "https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z",
			"justify-content": "space-evenly",
			"display": "block",
			"width": "77px",
			"border-color": "#ffffff",
			"color": "#ffffff",
			"filter": "invert(100%)"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0 0px 0",
			"text-align": "center",
			"font": "--headline2",
			"md-font": "--headline3",
			"padding": "14px 15px 0px 15px",
			"display": "flex",
			"align-content": "flex-start",
			"color": "--light",
			"children": "Elikuz Media"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "66%",
			"lg-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"md-width": "100%"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"margin": "2px 0px 0px 20px",
			"border-color": "#ffffff",
			"hover-border-color": "--color-primary",
			"width": "100%"
		}
	},
	"quarklycommunityKitMenuWithGroups": {
		"kind": "QuarklycommunityKitMenuWithGroups",
		"props": {
			"text-align": "left",
			"flex-direction": "row",
			"display": "flex",
			"font": "normal 300 20px/1.5 --fontFamily-sans",
			"color": "--light",
			"border-color": "#ffffff",
			"width": "100%",
			"justify-content": "left",
			"tabState": "collapseAll"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text-videointi",
			"children": "Videointi"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Item",
			"border-color": "#ffffff",
			"font": "normal 700 20px/1.5 --fontFamily-sans"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Link",
			"text-decoration-line": "initial",
			"active-border-color": "#000000",
			"border-color": "#ffffff",
			"color": "--light",
			"hover-color": "--primary",
			"active-color": "--grey"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Item-404",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Item :active",
			"color": "--primary"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Link-videointi",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text-valokuvaus",
			"children": "Valokuvaus"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride7": {
		"kind": "Override",
		"props": {
			"slot": "Link-valokuvaus",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text-yhden-henkilon-kuvaus",
			"children": "Yhden henkilön kuvaus"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride9": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text-monen-henkilon-kuvaus",
			"children": "Monen henkilön kuvaus"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride10": {
		"kind": "Override",
		"props": {
			"slot": "Link-monen-henkilon-kuvaus",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride11": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text-promokuvaus",
			"children": "Promokuvaus"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride12": {
		"kind": "Override",
		"props": {
			"slot": "Link-promokuvaus",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride13": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Icon",
			"category": "io",
			"icon": IoIosArrowDown
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride14": {
		"kind": "Override",
		"props": {
			"slot": "Link-yhden-henkilon-kuvaus",
			"display": "none"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride15": {
		"kind": "Override",
		"props": {
			"slot": "Link :active",
			"children": "Home"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride16": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text",
			"hover-color": "--primary",
			"hover-width": "100% border-box"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride17": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head",
			"hover-color": "--primary"
		}
	}
};

const Top = props => {
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
					<Image {...override("image")} />
					<Text {...override("text")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<StackItem {...override("stackItem2")}>
					<Box {...override("box1")}>
						<QuarklycommunityKitMenuWithGroups {...override("quarklycommunityKitMenuWithGroups")}>
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride1")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride2")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride3")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride4")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride5")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride6")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride7")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride8")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride9")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride10")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride11")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride12")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride13")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride14")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride15")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride16")} />
							<Override {...override("quarklycommunityKitMenuWithGroupsOverride17")} />
						</QuarklycommunityKitMenuWithGroups>
					</Box>
				</StackItem>
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Top, { ...Section,
	defaultProps,
	overrides
});
export default Top;