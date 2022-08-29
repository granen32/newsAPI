import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArticleProps } from "../../@types/";
import NewsItems from "./NewsItems";

const NewsListContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
  width: 768px;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const NewsLIist = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(loading);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8ecfcbbb387c4e7bae8ffb59f5282383"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  // 아직 articles 값이 설정되어 있지 않을 때
  if (loading) {
    return <NewsListContainer>...대기중</NewsListContainer>;
  }
  // articles 값이 유효할 때
  if (!articles) {
    return null;
  }
  console.log(articles);
  return (
    <>
      <NewsListContainer>
        {articles.map((article) => (
          <NewsItems key={article.url} articles={article} />
        ))}
      </NewsListContainer>
    </>
  );
};

export default NewsLIist;
