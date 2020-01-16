import React, { useState } from "react";

const ListForm = ({ addList }) => {
  const [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addList(value);
  };

  return (
    <form className="list-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className=""
        placeholder="Enter List Title"
        value={value}
        onChange={handleOnChange}
      />
    </form>
  );
};

export default ListForm;
