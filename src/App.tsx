import React, { useCallback, useState } from "react";
import NewsLIist from "./components/NewsLIist";
import Categories from "./components/Categories";
function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category: any) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsLIist category={category} />
    </>
  );
}

export default App;
