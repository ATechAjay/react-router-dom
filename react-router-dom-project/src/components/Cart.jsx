import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <h1>This is cart page...</h1>
      <Link to={"/products/cart/items"}>Items Page</Link>
    </>
  );
};

export default Cart;
