import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"valokuvaus/yhden-henkilon-kuvaus/henkilokuvaus-miljoossa"} />
		<Helmet>
			<title>
				Elikuz Media - Henkilökuvaus miljöössä
			</title>
			<meta name={"description"} content={"Elikuz Media"} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"Elikuz Media"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"} />
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
			background="--color-greyD2 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back1.jpg?v=2021-06-24T09:24:38.314Z) 0% 0%/cover"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				110 €{"\n\n"}
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Henkilökuvaus miljöössä
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="40px 0 20px 0"
				text-align="left"
				max-width="600px"
			>
				• 1 – 2,5 t kuvausaika
				<br />
				• Hinta sisältää runsaasti koevedoksia
				<br />
				• Ikä ei vaikuttaa hintaan
				<br />
				• Kuvankäsittely kuuluu hintaan{" "}
				<br />
				<br />
				Valokuvaukset vain Oulunseudulla
				<br />
				<br />
				Varaa aika kuvaukseen puh. 046 555 3684 tai contact@elikuz.com avulla
			</Text>
		</Section>
		<Components.QuarklycommunityKitGallery
			loaderFormatProp="all"
			autoFillInProp
			hideLoaderFullImage={false}
			offScrollProp={false}
			galleryItemNumbProp="10"
			aspectRatioProp="auto"
			hideLoaderPreviewImage={false}
			columnsCountProp="5"
			borderWidthProp="0"
		>
			<Override
				slot="Item 0"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z"
				stretchFull
				rowsNumb="1"
				columsNumb="1"
			/>
			<Override
				slot="Item"
				hover-transition="all 0.3s ease-in 0s"
				hover-filter="brightness(130%)"
				stretchFull={false}
				showFullImage={false}
				previewObjectFit="cover"
			/>
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z"
				stretchFull
				rowsNumb="1"
				columsNumb="2"
			/>
			<Override
				slot="Item 2"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="Item 3"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z"
				showFullImage={false}
				stretchFull={false}
			/>
			<Override slot="Item 4" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%282%29.jpg?v=2021-06-23T18:03:56.375Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%282%29.jpg?v=2021-06-23T18:03:56.375Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%282%29.jpg?v=2021-06-23T18:03:56.375Z" />
			<Override slot="Item 5" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z" fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z" />
			<Override
				slot="Item 6"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z"
				columsNumb="2"
				rowsNumb="1"
				showFullImage={false}
				stretchFull
			/>
			<Override
				slot="Item 7"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="Item 9"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-23T18:04:28.468Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-23T18:04:28.468Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-23T18:04:28.468Z"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override slot="Item 8" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z" />
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