import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <h1>This is Blog page</h1>
      <Link to={"frontend"}>Front-end Tutorials</Link>
      <Link to={"backend"}>Back-end Tutorials</Link>
    </>
  );
}

export default Blog;
