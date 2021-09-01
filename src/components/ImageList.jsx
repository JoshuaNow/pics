import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

// const ImageList = (props) => {
//   const images = props.images.map(({ image }, i) => {
//     return (
//       <img
//         key={image.id}
//         src={image.urls.regular}
//         alt={` ${image.description}`}
//       />
//     );
//   });
//   return <div>{images}</div>;
// };

const ImageList = (props) => {
  const images = props.images.map((image, i) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
