import React, { useContext } from "react";
import Card from "./Card";
import LargeCard from "./LargeCard";
import { ArticleContext } from "../pages/index";

const HomePage = () => {
  const articles = useContext(ArticleContext);
  console.log("articles from lg homepage", articles);
  return (
    <div className="grid-container-main">
      <div className="text-black grid-item-main">
        {articles.map((a) => (
          <Card key={a.id} id={a.id} title={a.title} body={a.body} />
        ))}
      </div>

      <div className="text-black grid-item-main">
      {articles.map((a) => (
        <LargeCard key={a.id} id={a.id} title={a.title} body={a.body} />
        ))}
      </div>

      <div className="text-black grid-item-main">
        {articles.map((a) => (
          <Card key={a.id} id={a.id} title={a.title} body={a.body} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
