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
		>
			<Override
				slot="Item 0"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%282%29.jpg?v=2021-06-23T18:03:45.127Z "
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
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0.jpg?v=2021-06-25T22:51:12.820Z"
				transition="visibility --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				opacity="1"
				columsNumb="5"
			/>
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z "
				stretchFull
				rowsNumb="1"
				columsNumb="4"
			/>
			<Override
				slot="Item 2"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z "
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="Item 3"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z "
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/6.jpg?v=2021-06-23T18:04:08.875Z "
				showFullImage={false}
				stretchFull={false}
				columsNumb="2"
			/>
			<Override slot="Item 4" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z " columsNumb="4" />
			<Override
				slot="Item 5"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z "
				columsNumb="2"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z "
			/>
			<Override
				slot="Item 6"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%282%29.jpg?v=2021-06-23T18:03:56.375Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%282%29.jpg?v=2021-06-23T18:03:56.375Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%282%29.jpg?v=2021-06-23T18:03:56.375Z "
				columsNumb="2"
				rowsNumb="1"
				showFullImage={false}
				stretchFull
			/>
			<Override
				slot="Item 7"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out3.jpg?v=2021-06-27T15:19:11.307Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out3.jpg?v=2021-06-27T15:19:11.307Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out3.jpg?v=2021-06-27T15:19:11.307Z"
				rowsNumb="3"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out3.jpg?v=2021-06-27T15:19:11.307Z "
				columsNumb="4"
			/>
			<Override
				slot="Item 9"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out10.jpg?v=2021-06-27T15:24:46.744Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out10.jpg?v=2021-06-27T15:24:46.744Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out10.jpg?v=2021-06-27T15:24:46.744Z "
				columsNumb="4"
				rowsNumb="3"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out10.jpg?v=2021-06-27T15:24:46.744Z "
			/>
			<Override
				slot="Item 8"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out13.jpg?v=2021-06-27T15:20:02.406Z "
				columsNumb="2"
				rowsNumb="3"
			/>
			<Override slot="Lightbox">
				<Override slot="Image" object-fit="contain" />
			</Override>
			<Override
				slot="Item 10"
				columsNumb="4"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out8.jpg?v=2021-06-27T15:24:46.735Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out8.jpg?v=2021-06-27T15:24:46.735Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out8.jpg?v=2021-06-27T15:24:46.735Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out8.jpg?v=2021-06-27T15:24:46.735Z"
			/>
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