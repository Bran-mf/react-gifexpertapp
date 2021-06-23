import React from "react";

const GifGridItem = ({id,title,url}) => {
    console.log({id,title,url})
  return (
    <div key={id} className="card animate__animated  animate__flipInX">
      <img alt='title' src={url} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
