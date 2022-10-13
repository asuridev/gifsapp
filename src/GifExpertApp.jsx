import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if (category.length <= 1) return;
    const categoriesUpperCase = categories.map((category) =>
      category.toUpperCase()
    );
    if (categoriesUpperCase.includes(category.toUpperCase())) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
