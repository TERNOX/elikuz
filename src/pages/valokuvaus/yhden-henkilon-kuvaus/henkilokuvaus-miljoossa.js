import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Span, Section, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
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
			background="--color-greyD2 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/back1%20%283%29.jpg?v=2021-06-24T09:41:28.212Z) 0% 0%/cover"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h5"
				font="--headline3"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				<Strong>
					110 €{"\n\n"}
				</Strong>
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Henkilökuvaus miljöössä
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0" text-align="left">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					• 1 – 2,5 t kuvausaika
					<br />
					• Hinta sisältää runsaasti koevedoksia
					<br />
					• Ikä ei vaikuttaa hintaan
					<br />
					• Kuvankäsittely kuuluu hintaan{" "}
				</Strong>
				<br />
				<br />
				<Span
					text-align="center"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					display="inline-block"
				>
					Valokuvaukset vain Oulunseudulla
				</Span>
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
			loaderFormatProp="all"
			autoFillInProp
			hideLoaderFullImage={false}
			offScrollProp={false}
			galleryItemNumbProp="10"
			aspectRatioProp="auto"
			hideLoaderPreviewImage
			columnsCountProp="8"
			borderWidthProp="0"
			transform="scale(1)"
			transition="all 0.5s ease 0s"
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
				hover-transition="all 0.3s ease-in 0s"
				hover-filter="brightness(130%)"
				stretchFull={false}
				showFullImage={false}
				previewObjectFit="cover"
				previewLoading="lazy"
				fullLoading="lazy"
			/>
			<Override
				slot="Item 1"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/2.jpg?v=2021-06-23T18:01:30.445Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/1%20%283%29.jpg?v=2021-06-23T18:01:19.237Z"
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
			<Override slot="Item 4" fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z" previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/7%20%283%29.jpg?v=2021-06-23T18:04:17.331Z " columsNumb="2" />
			<Override
				slot="Item 5"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/9.jpg?v=2021-06-23T18:04:28.481Z "
				columsNumb="2"
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
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"
				fullSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/8.jpg?v=2021-06-23T18:04:28.999Z"
				columsNumb="2"
				rowsNumb="3"
			/>
			<Override
				slot="Item 9"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-23T18:04:28.468Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-23T18:04:28.468Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/10.jpg?v=2021-06-23T18:04:28.468Z"
				columsNumb="3"
				rowsNumb="3"
			/>
			<Override
				slot="Item 8"
				previewSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				fullSrc="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z"
				previewSrcSet="https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/3.jpg?v=2021-06-23T18:03:45.125Z "
				columsNumb="3"
				rowsNumb="3"
			/>
		</Components.QuarklycommunityKitGallery>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/0.jpg?v=2021-06-25T22:51:12.820Z) 0% 65%/cover"
			flex-direction="row"
		>
			<Override
				slot="SectionContent"
				display="flex"
				flex-direction="row"
				width="200%"
				align-items="flex-start"
				flex-wrap="no-wrap"
				align-content="flex-start"
			/>
			<Stack
				justify-content="flex-start"
				flex-wrap="no-wrap"
				width="100%"
				align-content="flex-start"
				align-items="flex-start"
			>
				<StackItem
					md-width="100%"
					display="block"
					overflow-x="visible"
					overflow-y="visible"
					order="0"
					flex="1 1 0%"
					width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="row"
						flex-wrap="no-wrap"
						align-items="flex-start"
						align-content="flex-start"
						justify-content="center"
					/>
					<Box sm-padding="64px 0 0 0" max-width="360px" position="relative" padding="0 0 0 64px">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="p" margin="6px 0" font="--headline3">
							Uusikatu 72, A 22
							<br />
							Oulu 90120
						</Text>
					</Box>
				</StackItem>
				<StackItem
					md-width="100%"
					display="block"
					overflow-x="visible"
					overflow-y="visible"
					order="0"
					flex="1 1 0%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="row"
						flex-wrap="no-wrap"
						align-items="flex-start"
						width="25%"
						align-content="flex-start"
						justify-content="center"
					/>
					<Box padding="0 0 0 64px" sm-padding="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link
								href="mailto:hello@company.com"
								text-decoration="none"
								hover-text-decoration="underline"
								color="--light"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								contact@elikuz.com
								<br />
								<br />
							</Link>
						</Text>
						<Link href="#" background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/Fiverr-Emblem.png?v=2021-06-25T21:51:27.114Z) 0% 0% /100% repeat scroll padding-box" />
					</Box>
				</StackItem>
				<StackItem
					md-width="100%"
					display="block"
					overflow-x="visible"
					overflow-y="visible"
					order="0"
					flex="1 1 0%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="row"
						flex-wrap="no-wrap"
						align-items="flex-start"
						align-content="flex-start"
						justify-content="center"
					/>
					<Box padding="0 0 0 64px" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="p" margin="6px 0" font="--headline3" display="block">
							Elisey Kuziakin{"\n\n"}
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							046 555 3684
						</Text>
					</Box>
				</StackItem>
				<StackItem
					md-width="100%"
					display="block"
					overflow-x="visible"
					overflow-y="visible"
					order="0"
					flex="1 1 0%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="row"
						flex-wrap="no-wrap"
						align-items="flex-start"
						align-content="flex-start"
						justify-content="flex-start"
					/>
					<Link
						href="https://instagram.com/elikuzmedia"
						border-color="#ffffff"
						color="#ffffff"
						font="--headline3"
						display="block"
						target="_blank"
						background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/insta.png?v=2021-06-25T22:57:42.759Z) 0% 0% /cover repeat scroll padding-box"
						height="48px"
						width="48px"
						margin="0px 4px 0px 4px"
					/>
					<Link
						href="https://www.fiverr.com/eliseykuziakin"
						border-color="#ffffff"
						color="#ffffff"
						font="--headline3"
						display="block"
						target="_blank"
						background="url(https://uploads.quarkly.io/60a42e2413e4b0001f82a12d/images/fiverr.png?v=2021-06-25T22:57:42.759Z) 0% 0% /cover repeat scroll padding-box"
						height="48px"
						width="48px"
						margin="0px 4px 0px 4px"
					/>
				</StackItem>
			</Stack>
		</Section>
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