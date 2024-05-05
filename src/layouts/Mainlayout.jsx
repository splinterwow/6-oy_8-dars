import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Navbar1";

function Mainlayout() {
  return (
    <>
      <Navbar1 />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Mainlayout;
