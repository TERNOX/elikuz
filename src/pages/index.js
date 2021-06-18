import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
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
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline1" md-font="--headline3">
				Elikuz Media
			</Text>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline3" md-font="--headline3">
				Elisey Kuziakin
			</Text>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							Uusikatu 72, A 22
Oulu
Pohjois-Pohjanmaa
Finland
90120
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								contact@elikuz.com
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							+358465553684
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree endpoint="https://formspree.io/f/mwkalapg" completeText="Thank you for message!">
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Components.QuarklycommunityKitGallery
			galleryItemNumbProp="8"
			columnsCountProp="4"
			hideLoaderPreviewImage={false}
			hideLoaderFullImage={false}
			offScrollProp
			autoFillInProp
		>
			<Override slot="Item 0" fullSrc="https://images.unsplash.com/photo-1622495546876-3fccb94d3e2c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" fullSrcSet="https://images.unsplash.com/photo-1622495546876-3fccb94d3e2c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 1" fullSrc="https://images.unsplash.com/photo-1606787620651-3f8e15e00662?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item" fullSrc="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 2" fullSrc="https://images.unsplash.com/photo-1623956735844-bcac41372586?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 3" fullSrc="https://images.unsplash.com/photo-1623947804329-814d02fe6015?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 4" fullSrc="https://images.unsplash.com/photo-1611097313108-13b2783a2b2d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 5" fullSrc="https://images.unsplash.com/flagged/photo-1591409585805-c9df72ec382f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 6" fullSrc="https://images.unsplash.com/photo-1623851692991-99f2c8430a60?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 7" fullSrc="https://images.unsplash.com/photo-1623944985624-0eafb01fd4d3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" fullSrcSet="https://images.unsplash.com/photo-1624044153121-cd49214df3ec?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Components.QuarklycommunityKitGallery>
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