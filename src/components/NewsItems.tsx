import React from "react";
import styled from "styled-components";
import { ArticleProps } from "../../@types/index";
const NewsItemContainer = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 10px;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 5px;
      white-space: normal;
    }
    & + & {
      margin-top: 30px;
    }
  }
`;

const NewsItems = ({ article }: ArticleProps) => {
  const { title, description, url, urlToImage } = article;
  return (
    <>
      <NewsItemContainer>
        {urlToImage && (
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemContainer>
    </>
  );
};

export default NewsItems;
