import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Elikuz Media
			</title>
			<meta name={"description"} content={"ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja."} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"Elisey Kuziakin"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
		</Helmet>
		<Components.Top />
		<Components.QuarklycommunityKitCarousel
			showHead={false}
			showLink={false}
			showText={false}
			autoPlay
			autoPlayIntervalProp="4s"
			functionProp="ease-in-out"
			durationProp="0.7s"
			slidesProp="8"
			position="relative"
			autoPlayPauseProp="6s"
		>
			<Override slot="Slide Text 1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</Override>
			<Override slot="Slide Link 1">
				Link
			</Override>
			<Override
				slot="Slide Image"
				color="#000000"
				position="sticky"
				cursor="none"
				background="--color-darkL2"
			/>
			<Override
				slot="Slide Image 1"
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out11p.jpg?v=2021-06-30T02:56:24.262Z"
				object-fit="contain"
				display="inline-block"
				border-color="rgba(0, 0, 0, 0)"
				position="sticky"
				background="--color-darkL2"
			/>
			<Override
				slot="Slide Image 2"
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out14p.jpg?v=2021-06-30T02:56:46.168Z"
				object-fit="contain"
				background="--color-darkL2"
				position="sticky"
			/>
			<Override slot="Slide Image 3" src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0011p.jpg?v=2021-06-30T02:57:59.929Z" object-fit="contain" background="--color-darkL2" />
			<Override
				slot="Slide Image 4"
				object-fit="contain"
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0010p.jpg?v=2021-06-30T02:57:37.396Z"
				background="--color-darkL2"
				position="sticky"
			/>
			<Override slot="Slide Image 5" object-fit="contain" background="--color-darkL2" src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0012p.jpg?v=2021-06-30T02:58:23.252Z" />
			<Override slot="Slide Image 6" object-fit="contain" src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8p.jpg?v=2021-06-30T02:58:41.422Z" background="--color-darkL2" />
			<Override slot="Slide Image 7" src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/01p.jpg?v=2021-06-30T02:59:02.476Z" object-fit="contain" background="--color-darkL2" />
			<Override
				slot="Slide Image 8"
				object-fit="contain"
				background="--color-darkL2"
				cursor="zoom-in"
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/out8p.jpg?v=2021-06-30T02:59:44.895Z"
			/>
			<Override slot="Arrow" background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0) 100%)" />
			<Override slot="Arrow Next" background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0, 0, 0, 0) 100%)" />
			<Override slot="Arrow Prev" background="rgba(0, 0, 0, 0)" />
		</Components.QuarklycommunityKitCarousel>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="--color-darkL2"
		>
			<Stack font="--headline3">
				<StackItem
					width="33%"
					lg-width="50%"
					sm-width="100%"
					position="relative"
					order="0"
					flex="200%"
				>
					<Text margin="0px">
						ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja.{" "}
					</Text>
				</StackItem>
				<StackItem width="33%" lg-width="50%" sm-width="100%" flex="200%">
					<Text margin="0px" flex="0 1 auto" order="-1">
						Voit reippaasti tilata minulta valokuvauspalveluita, musiikki- ja mainos videoita sekä musiikkia yksityisille ihmisille ja yrityksille. Teen kuvauksia sekä omassa kotistudiossa että missä tahansa studion ulkopuolella.{" "}
					</Text>
				</StackItem>
				<StackItem
					width="33%"
					lg-width="50%"
					sm-width="100%"
					order="1"
					flex="1 1 0%"
				>
					<Text margin="0px">
						Kun yritykseni on vielä aika nuori, tarjoan omia palveluita mahdollisimman edullisella hinnalla ja olen avoinna henkilökohtaisiin etuihin.
					</Text>
				</StackItem>
			</Stack>
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