import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"videointi/tapahtuman-videointi"} />
		<Helmet>
			<title>
				Elikuz Media - Tapahtuman videointi
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
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/95.jpg?v=2021-06-23T20:13:11.330Z) center/cover">
			<Override slot="SectionContent" align-items="flex-end" />
			<Box max-width="340px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Tapahtuman videointi
				</Text>
				<Text font="--base">
					<Strong>
						Keikat, häät, hautajaiset, syntymäpäivät, ristiäiset, jne.
					</Strong>
					<br />
					<br />
					• Sovitaan hintaa videon pituuden ja monimutkaisuuden perustella
					<br />
					• Editointi kuuluu hintaan{" "}
					<br />
					<br />
					Videokuvaukset vain Oulunseudulla
					<br />
					<br />
					Varaa aika videoinniin puh. 046 555 3684 tai contact@elikuz.com avulla
					<br />
				</Text>
			</Box>
		</Section>
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