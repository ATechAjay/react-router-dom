import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default RootLayout;
