import React, { useCallback, useState } from "react";
import NewsLIist from "./components/NewsLIist";
import Categories from "./components/Categories";
import { CategoriesProps } from "../@types";
function App() {
  const [category, setCategory] = useState<CategoriesProps>();
  const onSelect = useCallback((category: any) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsLIist />
    </>
  );
}

export default App;
