import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"text-align": "center",
	"background-color": "--primary",
	"color": "--light",
	"padding": "50px 0 50px 0",
	"sm-padding": "40px 0",
	"background": "--color-greyD1"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h5",
			"font": "--lead",
			"margin": "10px 0 0 0",
			"text-transform": "uppercase",
			"letter-spacing": "5px",
			"children": <>
				80 €{"\n\n"}
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "10px 0 0 0",
			"children": "Lavastettu kuvaus studiossa"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "40px 0 20px 0",
			"text-align": "left",
			"max-width": "600px",
			"children": <>
				• 1 – 1,5 t kuvausaika
				<br />
				• Hinta sisältää runsaasti koevedoksia
				<br />
				• Ikä ei vaikuttaa hintaan
				<br />
				• Kuvankäsittely kuuluu hintaan
				<br />
				<br />
				Jos sinulla ei ole tietyä tyyliä, keksin jotain upea itse mitä sopii juuri sinulle parhaiten 

Varaa aika kuvaukseen puh. 046 555 3684 tai contact@elikuz.com avulla
			</>
		}
	}
};

const Infa = props => {
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
		{children}
	</Section>;
};

Object.assign(Infa, { ...Section,
	defaultProps,
	overrides
});
export default Infa;