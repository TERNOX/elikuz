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
		<Components.Top background="--color-darkL2">
			<Override slot="box" hover-cursor="none" />
		</Components.Top>
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
				background="rgba(0, 0, 0, 0)"
				color="#000000"
				position="sticky"
				cursor="none"
			/>
			<Override
				slot="Slide Image 1"
				srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/11.jpg?v=2021-06-27T12:06:25.193Z "
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/11.jpg?v=2021-06-27T12:06:25.193Z"
				object-fit="contain"
				background="rgba(0, 0, 0, 0)"
				display="inline-block"
				border-color="rgba(0, 0, 0, 0)"
				position="sticky"
			/>
			<Override
				slot="Slide Image 2"
				srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/14.jpg?v=2021-06-27T12:35:37.347Z "
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/14.jpg?v=2021-06-27T12:35:37.347Z"
				object-fit="contain"
				background="rgba(0, 0, 0, 0)"
				position="sticky"
			/>
			<Override
				slot="Slide Image 3"
				srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-27T12:35:56.684Z "
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-27T12:35:56.684Z"
				object-fit="contain"
				background="rgba(0, 0, 0, 0)"
			/>
			<Override
				slot="Slide Image 4"
				srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/11.jpg?v=2021-06-27T12:58:16.152Z "
				object-fit="contain"
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/11.jpg?v=2021-06-27T12:58:16.152Z"
				background="--color-darkL2"
				position="sticky"
			/>
			<Override slot="Slide Image 5" srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/12.jpg?v=2021-06-27T13:06:35.839Z " object-fit="contain" background="rgba(0, 0, 0, 0)" />
			<Override
				slot="Slide Image 6"
				srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-27T13:11:11.343Z "
				object-fit="contain"
				src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-27T13:11:11.343Z"
				background="--color-darkL2"
			/>
			<Override slot="Slide Image 7" src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-27T13:17:03.131Z" object-fit="contain" background="--color-darkL2" />
			<Override
				slot="Slide Image 8"
				srcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/15.jpg?v=2021-06-27T13:22:29.308Z "
				object-fit="contain"
				background="--color-darkL2"
				cursor="zoom-in"
			/>
		</Components.QuarklycommunityKitCarousel>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0, 0, 0, 0.81) 0%,rgba(0, 0, 0, 0.34) 100%),--color-dark url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/00.jpg?v=2021-06-27T13:46:45.489Z) 50% 15%/cover"
			color="--light"
			font="--base"
			hover-background="linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1624378804433-656379d28147?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 15%/cover"
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
				<StackItem width="33%" lg-width="50%" sm-width="100%" flex="1 1 0%">
					<Text margin="0px" flex="0 1 auto" order="-1">
						Voit reippasti tilata minulta valokuvauspalveluita, musiikki- ja mainos videoita sekä musiikkia yksityisille ihmisille ja yrityksille. Teen kuvauksia sekä omassa kotistudiossa että missä tahansa studion ulkopuolella.{" "}
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
						Kun yritykseni on aika nuori vielä, tarjoan omia palveluita mahdollisimman edullisella hinnalla ja olen avoinna henkilökohtaisiin etuihin.
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