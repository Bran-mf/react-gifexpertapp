import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {
  //   const categories = ["categoria1", "categoria2", "categoria3"];
  const [categories, setCategories] = useState([
    "categoria1",
  ]);
  
  return (
    <>
    <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

     
      <hr />
      {categories.map(categorie => (
         <GifGrid key={categorie} category={categorie}/ > 
      ))}
    </>
  );
};

export default GifExpertApp;
