import { Fragment } from "react";

const index = () => {
  return (
    <Fragment>
      <h1>About Us</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        perferendis pariatur placeat dolores omnis tempora distinctio sint
        blanditiis provident vitae.
      </p>

      <blockquote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </blockquote>

      <small>&copy; {new Date().getFullYear()}</small>
    </Fragment>
  );
};

export default index;
