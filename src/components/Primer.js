import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Strong, Span, Section } from "@quarkly/widgets";
const defaultProps = {
	"text-align": "center",
	"background-color": "--primary",
	"color": "--light",
	"padding": "50px 0 50px 0",
	"sm-padding": "40px 0",
	"background": "--color-greyD2 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back1%20%283%29.jpg?v=2021-06-24T09:41:28.212Z) 0% 0%/cover"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h5",
			"font": "--headline3",
			"margin": "10px 0 0 0",
			"text-transform": "uppercase",
			"letter-spacing": "5px",
			"children": <Strong
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				55 €{"\n\n"}
			</Strong>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "10px 0 0 0",
			"children": "Henkilökuvaus miljöössä"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "40px 0 20px 0",
			"text-align": "left",
			"children": <>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					• 1 – 2,5 t kuvausaika
					<br />
					• Hinta sisältää runsaasti koevedoksia
					<br />
					• Ikä ei vaikuttaa hintaan
					<br />
					• Kuvankäsittely kuuluu hintaan{" "}
				</Strong>
				<br />
				<br />
				<Span
					text-align="center"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
				>
					Valokuvaukset vain Oulunseudulla
				</Span>
			</>
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--base",
			"margin": "40px 0 20px 0",
			"text-align": "left",
			"max-width": "700px",
			"children": <Span
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Varaa aika kuvaukseen puh. 046 555 3684 tai contact@elikuz.com avulla
				</Span>
			</Span>
		}
	}
};

const Primer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		<Text {...override("text3")} />
		{children}
	</Section>;
};

Object.assign(Primer, { ...Section,
	defaultProps,
	overrides
});
export default Primer;