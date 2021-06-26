import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Span, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"valokuvaus/yhden-henkilon-kuvaus/muotokuvaus-studiossa"} />
		<Helmet>
			<title>
				Elikuz Media - Muotokuvaus studiossa
			</title>
			<meta name={"description"} content={"• 1 – 2,5 t kuvausaika\n• Hinta sisältää runsaasti koevedoksia\n• Ikä ei vaikuttaa hintaan\n• Kuvankäsittely kuuluu hintaan\n\nValokuvaukset vain Oulunseudulla"} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"• 1 – 2,5 t kuvausaika\n• Hinta sisältää runsaasti koevedoksia\n• Ikä ei vaikuttaa hintaan\n• Kuvankäsittely kuuluu hintaan\n\nValokuvaukset vain Oulunseudulla"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%282%29.jpg?v=2021-06-23T18:01:30.436Z"} />
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
			background="rgb(0, 119, 204) url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back2.jpg?v=2021-06-26T14:53:19.871Z) 0% 50% /cover repeat scroll padding-box"
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
					39 €{" "}
				</Strong>
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Muotokuvaus studiossa
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="40px 0 20px 0"
				text-align="left"
				max-width="600px"
				display="flex"
			>
				<Strong>
					• 0,5 – 1 t kuvausaika
					<br />
					• Hinta sisältää runsaasti koevedoksia
					<br />
					• Ikä ei vaikuttaa hintaan
					<br />
					• Kuvankäsittely kuuluu hintaan
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
			galleryItemNumbProp="7"
			columnsCountProp="4"
			borderWidthProp="0"
			loaderFormatProp="all"
			aspectRatioProp="auto"
			autoFillInProp
		>
			<Override
				slot="Item 0"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1.jpg?v=2021-06-23T17:47:03.664Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1.jpg?v=2021-06-23T17:47:03.664Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1.jpg?v=2021-06-23T17:47:03.664Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1.jpg?v=2021-06-23T17:47:03.664Z"
			/>
			<Override slot="Item" hover-transition="all 0.3s ease-in 0s" hover-filter="brightness(130%)" rowsNumb="1" />
			<Override slot="Item 1" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%282%29.jpg?v=2021-06-23T18:01:30.436Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%282%29.jpg?v=2021-06-23T18:01:30.436Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%282%29.jpg?v=2021-06-23T18:01:30.436Z" />
			<Override slot="Item 2" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3%20%282%29.jpg?v=2021-06-23T18:03:45.123Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3%20%282%29.jpg?v=2021-06-23T18:03:45.123Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3%20%282%29.jpg?v=2021-06-23T18:03:45.123Z" />
			<Override slot="Item 3" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4.jpg?v=2021-06-23T18:03:56.370Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4.jpg?v=2021-06-23T18:03:56.370Z" />
			<Override
				slot="Item 4"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5.jpg?v=2021-06-23T18:03:56.371Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5.jpg?v=2021-06-23T18:03:56.371Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5.jpg?v=2021-06-23T18:03:56.371Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5.jpg?v=2021-06-23T18:03:56.371Z"
			/>
			<Override slot="Item 5" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6%20%282%29.jpg?v=2021-06-23T18:04:08.862Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6%20%282%29.jpg?v=2021-06-23T18:04:08.862Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6%20%282%29.jpg?v=2021-06-23T18:04:08.862Z" />
			<Override slot="Item 6" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7.jpg?v=2021-06-23T18:04:17.339Z" columsNumb="2" />
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