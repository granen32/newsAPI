import React from "react";
import styled from "styled-components";
import NewsItems from "./NewsItems";

const NewsListContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
  width: 768px;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and(max-width:768px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const SampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://www.starbucks.co.kr/util/wireless.do",
  urlToImage: "https://www.starbucks.co.kr/util/wireless.do",
};

const NewsLIist = () => {
  return (
    <>
      <NewsListContainer>
        <NewsItems article={SampleArticle} />
      </NewsListContainer>
    </>
  );
};

export default NewsLIist;
