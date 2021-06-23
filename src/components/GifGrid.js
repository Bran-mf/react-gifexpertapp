// import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "./hooks/useFetchGifs";
const GifGrid = ({ category}) => {
  
  const {data:images,loading}=useFetchGifs(category);
 

  return (
      <>
    <div className="card-grid">
      <h2>{category}</h2>
      {loading && <p className=" animate__animated  animate__lightSpeedInRight">Loading...</p>}
   
        {images.map(img=> (
          <GifGridItem  key = {img.id} {... img}/>
        ))}
        
    </div>
    </>
  );
};

export default GifGrid;
