import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Buscar Gifs"
      />
    </form>
  );
};
