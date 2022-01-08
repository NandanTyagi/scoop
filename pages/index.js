import HomePage from "../components/HomePage";
import { createContext } from "react";

export const ArticleContext = createContext(null);
export default function Home({ articles }) {
  console.log("articles", articles);
  return (
    <>
      <ArticleContext.Provider value={articles}>
        <HomePage />
      </ArticleContext.Provider>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
