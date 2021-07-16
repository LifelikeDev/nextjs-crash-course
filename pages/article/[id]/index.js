// import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const { id, title, content } = article;

  const styles = {
    heading: {
      textAlign: "center",
    },
    article: {
      backgroundColor: "#29313169",
      margin: ".5rem 10%",
      padding: "2rem 1.5rem",
    },
    articleNumber: {
      display: "block",
      marginBottom: "1rem",
    },
    link: {
      color: "#57adbd",
      fontSize: ".85rem",
    },
  };

  return (
    <article style={styles.article}>
      <h2 style={styles.heading}>{title.toUpperCase()}</h2>

      <p>{content}</p>

      <small style={styles.articleNumber}>Article Number {id}</small>

      <Link href="/">
        <a style={styles.link}>&larr; Back Home</a>
      </Link>
    </article>
  );
};

export default article;

// using Static Props and Static Paths from nextjs api routes

export const getStaticProps = async (context) => {
  const result = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const result = await fetch(`${server}/api/articles`);

  const articles = await result.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// // using Static Props and Static Paths

// export const getStaticProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await result.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await result.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// using Server Side Props
// export const getServerSideProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await result.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
