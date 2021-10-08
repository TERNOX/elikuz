import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"valokuvaus/monen-henkilon-kuvaus/pari-ja-perhekuvaus-studiossa"} />
		<Helmet>
			<title>
				Elikuz Media - Pari- ja perhekuvaus studiossa
			</title>
			<meta name={"description"} content={"ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja."} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/15.jpg?v=2021-06-27T13:22:29.308Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
		</Helmet>
		<Components.Top />
		<Section padding="14px 0 14px 0" sm-padding="40px 0" background="--color-lightD1 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back6.jpg?v=2021-07-20T20:23:26.889Z) 0% 0% /100% repeat scroll padding-box">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box
				padding="50px 80px 80px 50px"
				color="--dark"
				width="100% border-box"
				display="grid"
				justify-items="center"
			>
				<Text
					as="h4"
					font="--headline3"
					color="--light"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					55 €{" "}
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0" color="#ffffff">
					Pari- ja perhekuvaus studiossa
				</Text>
				<Text font="--base" text-align="left" align-content="center" color="#ffffff">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						• 0,5 – 1,5 t kuvausaika
						<br />
						• Hinta sisältää runsaasti koevedoksia
						<br />
						• Ikä ei vaikuttaa hintaan
						<br />
						• Henkilöiden määrä ei vaikuttaa hintaan
						<br />
						• Kuvankäsittely kuuluu hintaan
						<br />
					</Strong>
				</Text>
				<Text font="--base" text-align="left" align-content="center" color="#ffffff">
					Varaa aika kuvaukseen puh. 046 555 3684 tai contact@elikuz.com avulla
				</Text>
			</Box>
		</Section>
		<Components.QuarklycommunityKitGallery
			galleryItemNumbProp="4"
			columnsCountProp="2"
			offScrollProp
			overflow-x="visible"
			overflow-y="visible"
			borderWidthProp="0"
		>
			<Override slot="Item" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p2.jpg?v=2021-07-20T22:36:08.958Z" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/21p.jpg?v=2021-07-20T19:22:09.503Z" />
			<Override slot="Item 1" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p5.jpg?v=2021-10-08T06:28:46.036Z" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p5p.jpg?v=2021-10-08T06:28:52.472Z" />
			<Override slot="Item 2" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p3.jpg?v=2021-10-08T06:29:03.662Z" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p3p.jpg?v=2021-10-08T06:29:09.207Z" />
			<Override slot="Item 3" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p4.jpg?v=2021-10-08T06:29:20.585Z" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/p4p.jpg?v=2021-10-08T06:29:30.317Z" />
		</Components.QuarklycommunityKitGallery>
		<Components.Footerendd />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<meta
				charset={""}
				name={"yandex-verification"}
				content={"d655255f04a7954a"}
				place={"endOfHead"}
				rawKey={"60a434f8beb9acc727daae7f"}
			/>
		</RawHtml>
	</Theme>;
});