import React from "react";
import Categories from "../components/Categories";
import NewsLIist from "../components/NewsLIist";
import { RouteComponentProps } from "react-router";
interface MatchParams {
  category: string;
}
const NewsPage = ({ match }: RouteComponentProps<MatchParams>) => {
  // 카테고리 매치시키기
  const category = match.params.category || "all";
  return (
    <>
      <Categories />
      <NewsLIist category={category} />
    </>
  );
};

export default NewsPage;
