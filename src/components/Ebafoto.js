import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import QuarklycommunityKitGallery from "./QuarklycommunityKitGallery";
const defaultProps = {
	"galleryItemNumbProp": "9",
	"columnsCountProp": "4",
	"borderWidthProp": "0",
	"loaderFormatProp": "all",
	"aspectRatioProp": "auto"
};
const overrides = {};

const Ebafoto = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitGallery {...rest}>
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
		{children}
	</QuarklycommunityKitGallery>;
};

Object.assign(Ebafoto, { ...QuarklycommunityKitGallery,
	defaultProps,
	overrides
});
export default Ebafoto;