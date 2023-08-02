import { Link } from "react-router-dom";
const ProductsPage = () => {
  return (
    <>
      <h1>Products page</h1>
      <Link to={"cart"}>Cart Page</Link>
    </>
  );
};

export default ProductsPage;
