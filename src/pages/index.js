import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { IoIosArrowDown } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Elikuz Media
			</title>
			<meta name={"description"} content={"Elikuz Media"} />
			<meta property={"og:title"} content={"Elikuz Media"} />
			<meta property={"og:description"} content={"Elisey Kuziakin"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/avtoru.png?v=2021-05-18T22:17:29.879Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z"} />
		</Helmet>
		<Section font="16px ">
			<Box
				display="flex"
				padding="12px 0 12px 0"
				justify-content="space-between"
				align-items="center"
				md-flex-direction="column"
				text-align="center"
				align-self="baseline"
			>
				<Image width="77pxт" height="81px" src="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/ELIKUZ%20Media%20logo.png?v=2021-06-18T22:56:31.034Z" />
				<Text
					margin="0px 0 0px 0"
					text-align="center"
					font="--headline1"
					md-font="--headline3"
					padding="0px 0px 0px 15px"
				>
					Elikuz Media
				</Text>
			</Box>
			<Components.QuarklycommunityKitMenuWithGroups
				tabState="collapseAll"
				text-align="left"
				flex-direction="row"
				display="flex"
				font="normal 700 20px/1.5 --fontFamily-sans"
				align-content="center"
				justify-content="center"
				color="#000000"
			>
				<Override slot="Sub Head Text-videointi">
					Videointi
				</Override>
				<Override slot="Item" border-color="#000000" />
				<Override
					slot="Link"
					text-decoration-line="initial"
					active-border-color="#000000"
					border-color="#000000"
					display="block"
				/>
				<Override slot="Item-404" display="none" />
				<Override slot="Item :active" color="#000000" />
				<Override slot="Link-videointi" display="none" />
				<Override slot="Sub Head Text-valokuvaus">
					Valokuvaus
				</Override>
				<Override slot="Link-valokuvaus" display="none" />
				<Override slot="Sub Head Text-yhden-henkilon-kuvaus">
					Yhden henkilön kuvaus
				</Override>
				<Override slot="Sub Head Text-monen-henkilon-kuvaus">
					Monen henkilön kuvaus
				</Override>
				<Override slot="Link-monen-henkilon-kuvaus" display="none" />
				<Override slot="Sub Head Text-promokuvaus">
					Promokuvaus
				</Override>
				<Override slot="Link-promokuvaus" display="none" />
				<Override slot="Sub Head Icon" category="io" icon={IoIosArrowDown} />
			</Components.QuarklycommunityKitMenuWithGroups>
		</Section>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1624378804433-656379d28147?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 15%/cover"
			color="--light"
			font="--base"
			hover-background="--color-dark url(https://images.unsplash.com/photo-1624378804433-656379d28147?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 15%/cover"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Elikuz Media{"\n\n"}
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						Etusivu
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						ELIKUZ Media on oululainen toiminimi, joka tarjoaa monipuolista audiovisuaalista sisältöä. Olen jo monta vuotta ammattilainen video- ja valokuvatuottaja sekä säveltäjä ja käsikirjoittaja.{" "}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						Voit reippasti tilata minulta valokuvauspalveluja, musiikki- ja mainos videoita sekä musiikkia yksityisille ihmisille ja yrityksille. Teen kuvauksia sekä omassa kotistudiossa että missä tahansa studion ulkopuolella.{" "}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						Kun yritys on aika nuori vielä, tarjoan omia palveluita aika edullisimalla hinnalla ja olen avoinna henkilökohtaisiin etuihin.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer />
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