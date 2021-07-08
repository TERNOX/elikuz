import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Span, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"valokuvaus/yhden-henkilon-kuvaus/lavastettu-kuvaus-studiossa"} />
		<Helmet>
			<title>
				Elikuz Media 
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
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="50px 0 50px 0"
			sm-padding="40px 0"
			background="--color-greyD1 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back3.jpg?v=2021-06-26T18:50:04.403Z) 0% 50%/cover"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				<Strong>
					45 €{"\n\n"}
				</Strong>
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Lavastettu kuvaus studiossa
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="40px 0 20px 0"
				text-align="left"
				max-width="600px"
			>
				<Strong>
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
				</Strong>
			</Text>
			<Text
				as="p"
				font="--base"
				margin="40px 0 20px 0"
				text-align="left"
				max-width="700px"
			>
				<Span
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
			</Text>
		</Section>
		<Components.QuarklycommunityKitGallery
			galleryItemNumbProp="5"
			borderWidthProp="0"
			loaderFormatProp="scroll"
			aspectRatioProp="auto"
			columnsCountProp="3"
			autoFillInProp
			sm-overflow-x="hidden"
			sm-overflow-y="hidden"
			offScrollProp
		>
			<Override slot="Item 0" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/02.jpg?v=2021-07-08T15:14:59.074Z" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/02p.jpg?v=2021-07-08T15:14:53.710Z" fullObjectFit="none" />
			<Override
				slot="Item"
				hover-transition="all 0.3s ease-in 0s"
				hover-filter="brightness(130%)"
				stretchFull
				showFullImage={false}
				previewObjectFit="cover"
				fullObjectFit="cover"
			/>
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/05p.jpg?v=2021-07-08T15:11:46.007Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/05.jpg?v=2021-07-08T15:11:53.347Z"
				previewObjectFit="none"
				stretchFull
			/>
			<Override slot="Item 2" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/06p.jpg?v=2021-07-08T15:10:34.840Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/06.jpg?v=2021-07-08T15:10:43.099Z" />
			<Override slot="Item 3" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/07p.jpg?v=2021-07-08T15:39:53.285Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/07.jpg?v=2021-07-08T15:39:45.201Z" columsNumb="2" />
			<Override slot="Item 4" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/08p.jpg?v=2021-07-08T15:41:02.141Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/08.jpg?v=2021-07-08T15:41:09.191Z" />
			<Override slot="Item 5" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6%20%282%29.jpg?v=2021-06-23T18:04:08.862Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6%20%282%29.jpg?v=2021-06-23T18:04:08.862Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6%20%282%29.jpg?v=2021-06-23T18:04:08.862Z" />
			<Override slot="Item 6" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7.jpg?v=2021-06-23T18:04:17.339Z" />
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