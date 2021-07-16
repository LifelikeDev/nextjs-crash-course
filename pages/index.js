import { Fragment } from "react";
import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export default function Home({ articles }) {
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
        {articles.map(({ id, title, body }) => (
          <Link href="/article/[id]" as={`/article/${id}`} key={id}>
            <a>
              <article className={articleStyles.card}>
                <h2>{title}</h2>

                <p>{`${body.substr(0, 90).trim()}...`}</p>
              </article>
            </a>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};
