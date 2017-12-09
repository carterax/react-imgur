// Create Our Image List Component
// 1. import react
import React from 'react';
import ImageDetail from './image_detail';


// 2. create the imagelist component
const ImageList = (props) => {
	const validImages = props.images.filter( image => !image.is_album );
	
	const RenderedImages = validImages.map( image => <ImageDetail key={image.title} image={image} /> );
	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

// 3. Export the component
export default ImageList;