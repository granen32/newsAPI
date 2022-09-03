import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];
const CategoriesContainer = styled.div`
  display: flex;
  padding: 15px;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled(NavLink)`
  font-size: 14px;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 10px;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 10px;
  }
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((item) => (
        <Category
          to={item.name === "all" ? "/" : `${item.name}`}
          key={item.name}
          activeClassName="active"
          exact={item.name === "all"}
        >
          {item.text}
        </Category>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
