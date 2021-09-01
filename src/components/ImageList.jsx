import React from "react";

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
  const images = props.images.map(({ description, id, urls }, i) => {
    return <img key={id} src={urls.regular} alt={` ${description}`} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
