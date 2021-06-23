import React, { useState } from "react";
import PropTypes from "prop-types"
const AddCategory = ({setCategories}) => {
  const [inputvalue, setinputValue] = useState("Hola mundo");
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputvalue.trim().length>2);
    setCategories(cats =>[inputvalue,...cats]);
    setinputValue('');

  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputvalue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes ={
    setCategories:PropTypes.func.isRequired,
}

export default AddCategory;
