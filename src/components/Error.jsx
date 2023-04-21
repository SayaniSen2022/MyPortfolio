import { Link } from "react-router-dom";
import React from "react";

const Error = () => {
  return (
    <>
      <h2>404</h2>
      <p>Page not found!</p>
      <Link to="/">Back Home</Link>
    </>
  );
};
export default Error;
