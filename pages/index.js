import { Fragment } from "react";
import { server } from "../config";
import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export default function Home({ articles }) {
  console.log(articles);

  const styles = {
    heading: {
      textAlign: "center",
    },
    article: {
      backgroundColor: "#29313169",
      margin: ".5rem 10%",
      padding: ".5rem 0 .5rem .8rem",
    },
  };

  return (
    <Fragment>
      <h1 style={styles.heading}>NextJS Blog</h1>

      <div className={articleStyles.grid}>
        {articles.map(({ id, title, excerpt }) => (
          <Link href="/article/[id]" as={`/article/${id}`} key={id}>
            <a>
              <article className={articleStyles.card}>
                <h2>{title}</h2>

                <p>{excerpt.substr(0, 92).trim()}...</p>
              </article>
            </a>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

// fetching data from nextjs api

export const getStaticProps = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};

// fetching data from jsonplacholder.typicode.com

// export const getStaticProps = async () => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10`
//   );
//   const articles = await result.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
