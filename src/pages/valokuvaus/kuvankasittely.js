import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"valokuvaus/kuvankasittely"} />
		<Helmet>
			<title>
				Elikuz Media
			</title>
			<meta name={"description"} content={"Elikuz Media"} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"Elikuz Media"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%282%29.jpg?v=2021-06-23T18:01:09.874Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
		</Helmet>
		<Components.Top />
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1541582596622-c0a08ae45b9f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover">
			<Override slot="SectionContent" align-items="flex-end" />
			<Box max-width="340px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					5 € / kuva{"\n\n"}
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Kuvankäsittely{" "}
				</Text>
				<Text font="--base">
					Käsittelyyn kuuluu:
					<br />
					• kuvan rajaus
					<br />
					• finnien ja kuulumattomien elementtien poisto
					<br />
					• värisävyjen säätö
					<br />
					• kuvan korostuksia
					<br />
					• logon lisääminen
					<br />
					<br />
					Varaa aika puh. 046 555 3684 tai contact@elikuz.com avulla
				</Text>
			</Box>
		</Section>
		<Components.QuarklycommunityKitGallery
			galleryItemNumbProp="9"
			columnsCountProp="4"
			borderWidthProp="0"
			loaderFormatProp="all"
			aspectRatioProp="auto"
		>
			<Override
				slot="Item 0"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%284%29.jpg?v=2021-06-23T18:01:19.226Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%284%29.jpg?v=2021-06-23T18:01:19.226Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%284%29.jpg?v=2021-06-23T18:01:19.226Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%284%29.jpg?v=2021-06-23T18:01:19.226Z"
				columsNumb="2"
			/>
			<Override slot="Item" hover-transition="all 0.3s ease-in 0s" hover-filter="brightness(130%)" />
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%284%29.jpg?v=2021-06-23T18:01:30.440Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%284%29.jpg?v=2021-06-23T18:01:30.440Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%284%29.jpg?v=2021-06-23T18:01:30.440Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2%20%284%29.jpg?v=2021-06-23T18:01:30.440Z"
				columsNumb="2"
			/>
			<Override
				slot="Item 2"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc3.jpg?v=2021-06-23T20:04:16.536Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc3.jpg?v=2021-06-23T20:04:16.536Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc3.jpg?v=2021-06-23T20:04:16.536Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc3.jpg?v=2021-06-23T20:04:16.536Z"
				columsNumb="2"
			/>
			<Override
				slot="Item 3"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%283%29.jpg?v=2021-06-23T18:03:45.139Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%283%29.jpg?v=2021-06-23T18:03:45.139Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%283%29.jpg?v=2021-06-23T18:03:45.139Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/4%20%283%29.jpg?v=2021-06-23T18:03:45.139Z"
				columsNumb="2"
			/>
			<Override slot="Item 4" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%283%29.jpg?v=2021-06-23T18:03:56.413Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%283%29.jpg?v=2021-06-23T18:03:56.413Z" fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/5%20%283%29.jpg?v=2021-06-23T18:03:56.413Z" />
			<Override
				slot="Item 5"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc6.jpg?v=2021-06-23T20:04:16.538Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc6.jpg?v=2021-06-23T20:04:16.538Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc6.jpg?v=2021-06-23T20:04:16.538Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ccc6.jpg?v=2021-06-23T20:04:16.538Z"
				columsNumb="2"
			/>
			<Override
				slot="Item 6"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%282%29.jpg?v=2021-06-23T18:04:08.890Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%282%29.jpg?v=2021-06-23T18:04:08.890Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%282%29.jpg?v=2021-06-23T18:04:08.890Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%282%29.jpg?v=2021-06-23T18:04:08.890Z"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override slot="Item 7" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8%20%282%29.jpg?v=2021-06-23T18:04:17.342Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8%20%282%29.jpg?v=2021-06-23T18:04:17.342Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8%20%282%29.jpg?v=2021-06-23T18:04:17.342Z" />
			<Override
				slot="Item 8"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9%20%282%29.jpg?v=2021-06-23T18:04:28.474Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9%20%282%29.jpg?v=2021-06-23T18:04:28.474Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9%20%282%29.jpg?v=2021-06-23T18:04:28.474Z"
				columsNumb="2"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9%20%282%29.jpg?v=2021-06-23T18:04:28.474Z"
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