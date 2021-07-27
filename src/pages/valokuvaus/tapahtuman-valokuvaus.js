import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"valokuvaus/tapahtuman-valokuvaus"} />
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
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back5.jpg?v=2021-06-26T19:15:18.467Z) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="340px" padding="50px 80px 80px 50px" background="rgba(247, 251, 255, 0.75)" color="--dark">
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Tapahtuman valokuvaus
				</Text>
				<Text font="--base">
					<Strong>
						Keikat, häät, hautajaiset, syntymäpäivät, ristiäiset, jne.
					</Strong>
					<br />
					<br />
					• 90 € ensimmäinen tunti 70 € seuraavilta alkavilta tunneilta
					<br />
					• Kuvankäsittely kuuluu hintaan{" "}
					<br />
					<br />
					{"\n\n"}Valokuvaukset vain Oulunseudulla
					<br />
					<br />
					Varaa aika kuvaukseen
					<br />
					puh. 046 555 3684 tai contact@elikuz.com avulla
				</Text>
			</Box>
		</Section>
		<Components.Ebafoto galleryItemNumbProp="11">
			<Override
				slot="Item 0"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/001p.jpg?v=2021-06-30T03:16:15.836Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/001.jpg?v=2021-06-30T03:16:23.098Z"
				showFullImage={false}
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/001p.jpg?v=2021-06-30T03:16:15.836Z "
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/001.jpg?v=2021-06-30T03:16:23.098Z "
			/>
			<Override slot="Item" />
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/002p.jpg?v=2021-06-30T03:19:15.061Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/002.jpg?v=2021-06-30T03:19:21.402Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/002.jpg?v=2021-06-30T03:19:21.402Z "
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/002p.jpg?v=2021-06-30T03:19:15.061Z "
			/>
			<Override
				slot="Item 2"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/003p.jpg?v=2021-06-30T03:20:14.877Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/003p.jpg?v=2021-06-30T03:20:14.877Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/003.jpg?v=2021-06-30T03:20:25.712Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/003.jpg?v=2021-06-30T03:20:25.712Z"
			/>
			<Override
				slot="Item 3"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/004p.jpg?v=2021-06-30T03:20:40.858Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/004p.jpg?v=2021-06-30T03:20:40.858Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/004.jpg?v=2021-06-30T03:20:46.328Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/004.jpg?v=2021-06-30T03:20:46.328Z"
			/>
			<Override
				slot="Item 4"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/005p.jpg?v=2021-06-30T03:21:19.991Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/005p.jpg?v=2021-06-30T03:21:19.991Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/005.jpg?v=2021-06-30T03:21:33.652Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/005.jpg?v=2021-06-30T03:21:33.652Z"
			/>
			<Override
				slot="Item 5"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/007p.jpg?v=2021-06-30T03:21:54.611Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/007p.jpg?v=2021-06-30T03:21:54.611Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/007.jpg?v=2021-06-30T03:22:11.592Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/007.jpg?v=2021-06-30T03:22:11.592Z"
			/>
			<Override
				slot="Item 7"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/008p.jpg?v=2021-06-30T03:22:28.126Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/008p.jpg?v=2021-06-30T03:22:28.126Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/008.jpg?v=2021-06-30T03:22:40.443Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/008.jpg?v=2021-06-30T03:22:40.443Z"
			/>
			<Override
				slot="Item 6"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/006p.jpg?v=2021-06-30T03:22:58.169Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/006p.jpg?v=2021-06-30T03:22:58.169Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/006p.jpg?v=2021-06-30T03:22:58.169Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/006p.jpg?v=2021-06-30T03:22:58.169Z"
			/>
			<Override
				slot="Item 8"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/009p.jpg?v=2021-06-30T03:23:20.488Z "
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/009p.jpg?v=2021-06-30T03:23:20.488Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/009.jpg?v=2021-06-30T03:23:34.278Z "
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/009.jpg?v=2021-06-30T03:23:34.278Z"
			/>
			<Override slot="Item 9" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0013p.jpg?v=2021-07-27T08:53:08.796Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0013.jpg?v=2021-07-27T08:53:19.944Z" columsNumb="2" />
			<Override slot="Item 10" previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0014p.jpg?v=2021-07-27T08:54:31.082Z" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0014.jpg?v=2021-07-27T08:54:37.000Z" columsNumb="2" />
		</Components.Ebafoto>
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