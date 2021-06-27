import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Box, Link, Section } from "@quarkly/widgets";
import QuarklycommunityKitMenuWithGroups from "./QuarklycommunityKitMenuWithGroups";
import { IoIosArrowDown } from "react-icons/io";
const defaultProps = {
	"background": "--color-darkL2",
	"padding": "64px 0 48px 0",
	"sm-padding": "40px 0",
	"justify-content": "center",
	"inner-width": "100%",
	"inner-min-width": "100%"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"margin": "-16px 0 -16px 0",
			"padding": "0px 0px 0px 0",
			"flex": "0 0 auto",
			"display": "flex",
			"overflow-x": "visible",
			"flex-direction": "row"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "100%",
			"margin": "0px 0px 0px 0px",
			"md-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"color": "--dark",
			"background": "--color-darkL2",
			"flex-direction": "column",
			"md-align-items": "center",
			"md-padding": "0px 61px 0px 0px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"margin": "0px 0px 0px 15%",
			"hover-cursor": "none",
			"children": <Link
				href="https://elikuz.com/"
				color="#ffffff"
				font="--headline2"
				text-decoration-line="initial"
				background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Medi%D0%B0%20logo%20white.png?v=2021-06-25T23:33:11.193Z) 0% 0%/contain no-repeat"
				height="80px"
				flex="1 1 0%"
				order="0"
				align-self="center"
				overflow-x="visible"
				overflow-y="visible"
				display="flex"
				justify-content="flex-start"
				align-items="center"
				padding="0px 0px 0px 83px"
			>
				Elikuz Media{"\n\n"}
			</Link>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"lg-width": "100%",
			"text-align": "center",
			"display": "flex",
			"align-content": "center",
			"justify-content": "center",
			"align-items": "center",
			"width": "75%",
			"md-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"width": "100%",
			"align-content": "center",
			"justify-content": "center",
			"align-items": "center",
			"align-self": "center"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"md-width": "100%",
			"align-items": "center",
			"display": "flex",
			"justify-content": "center",
			"align-content": "center",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"justify-content": "center",
			"align-items": "center",
			"padding": "0px 33% 0px 0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"margin": "2px 0px 0px 20px",
			"border-color": "#ffffff",
			"hover-border-color": "--color-primary",
			"align-self": "center",
			"sm-width": "100%"
		}
	},
	"quarklycommunityKitMenuWithGroups": {
		"kind": "QuarklycommunityKitMenuWithGroups",
		"props": {
			"text-align": "left",
			"flex-direction": "row",
			"display": "flex",
			"font": "normal 300 22px/1.5 --fontFamily-sans",
			"color": "--light",
			"border-color": "#ffffff",
			"width": "100%",
			"justify-content": "left",
			"tabState": "collapseAll",
			"sm-display": "block",
			"sm-width": "100%"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride": {
		"kind": "Override",
		"props": {
			"slot": "Sub Head Text-videointi",
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans",
			"children": "Videointi"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Item",
			"border-color": "#ffffff",
			"font": "normal 700 28px/1.5 --fontFamily-sans",
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans"
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
			"active-color": "--grey",
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans",
			"children": "Etusivu"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Item-404",
			"display": "none",
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Item :active",
			"color": "--primary",
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans"
		}
	},
	"quarklycommunityKitMenuWithGroupsOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Link-videointi",
			"display": "none",
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans"
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
			"icon": IoIosArrowDown,
			"font": "200 22px/24px -apple-system, system-ui, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
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
			"sm-font": "normal 300 24px/1.5 --fontFamily-sans",
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
		<Override slot="SectionContent" width="100%" />
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Box {...override("box")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<StackItem {...override("stackItem2")}>
					<Override {...override("stackItemOverride2")} />
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