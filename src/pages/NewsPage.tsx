import React from "react";
import Categories from "../components/Categories";
import NewsLIist from "../components/NewsLIist";
import { useParams } from "react-router-dom";
const NewsPage = () => {
  // 카테고리 매치시키기
  const { params } = useParams();
  const category = params || "all";
  console.log(params);
  return (
    <>
      <Categories />
      <NewsLIist category={category} />
    </>
  );
};

export default NewsPage;
