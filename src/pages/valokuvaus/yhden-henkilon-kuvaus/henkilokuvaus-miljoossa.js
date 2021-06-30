import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
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
			<meta name={"description"} content={"ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja."} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
		</Helmet>
		<Components.Top />
		<Components.Primer />
		<Components.QuarklycommunityKitGallery
			loaderFormatProp="scroll"
			autoFillInProp
			hideLoaderFullImage={false}
			offScrollProp={false}
			galleryItemNumbProp="11"
			aspectRatioProp="auto"
			hideLoaderPreviewImage={false}
			columnsCountProp="8"
			borderWidthProp="0"
			transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
			min-height="1226px"
			sm-overflow-x="hidden"
			sm-overflow-y="hidden"
			sm-min-height="100%"
			sm-width="100%"
		>
			<Override
				slot="Item 0"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out4.jpg?v=2021-06-30T03:08:38.027Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out4p.jpg?v=2021-06-30T03:08:31.031Z"
				stretchFull
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="Item"
				hover-transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				hover-filter="brightness(130%)"
				stretchFull={false}
				showFullImage={false}
				previewObjectFit="cover"
				previewLoading="eager"
				fullLoading="eager"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0.jpg?v=2021-06-25T22:51:12.820Z"
				transition="visibility --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				opacity="1"
				columsNumb="5"
				sm-overflow-x="hidden"
				sm-overflow-y="hidden"
				rowsNumb="5"
			/>
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out2p.jpg?v=2021-06-30T03:08:56.569Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out2.jpg?v=2021-06-30T03:09:03.960Z"
				stretchFull
				rowsNumb="1"
				columsNumb="4"
			/>
			<Override
				slot="Item 2"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out1p.jpg?v=2021-06-30T03:09:17.892Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out1.jpg?v=2021-06-30T03:09:31.295Z"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="Item 3"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out6p.jpg?v=2021-06-30T03:09:50.230Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out6.jpg?v=2021-06-30T03:10:08.904Z"
				showFullImage={false}
				stretchFull={false}
				columsNumb="2"
			/>
			<Override slot="Item 4" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out7.jpg?v=2021-06-30T03:10:37.873Z" columsNumb="4" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out7p.jpg?v=2021-06-30T03:10:30.516Z" />
			<Override slot="Item 5" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out5p.jpg?v=2021-06-30T03:10:57.757Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out5.jpg?v=2021-06-30T03:11:03.646Z" columsNumb="2" />
			<Override
				slot="Item 6"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out13p.jpg?v=2021-06-30T03:11:24.848Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out13.jpg?v=2021-06-30T03:11:30.938Z"
				columsNumb="2"
				showFullImage={false}
				stretchFull
			/>
			<Override slot="Item 7" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out3.jpg?v=2021-06-30T03:12:31.739Z" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out3p.jpg?v=2021-06-30T03:12:25.645Z" columsNumb="4" />
			<Override
				slot="Item 9"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out10p.jpg?v=2021-06-30T03:14:53.419Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out10.jpg?v=2021-06-30T03:14:59.804Z"
				columsNumb="4"
				rowsNumb="3"
			/>
			<Override
				slot="Item 8"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out9p.jpg?v=2021-06-30T03:12:53.573Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out9.jpg?v=2021-06-30T03:12:59.686Z"
				columsNumb="2"
				stretchFull
			/>
			<Override slot="Lightbox">
				<Override slot="Image" object-fit="contain" />
			</Override>
			<Override slot="Item 10" columsNumb="4" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out15p.jpg?v=2021-06-30T03:07:44.261Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out15.jpg?v=2021-06-30T03:07:49.706Z" />
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