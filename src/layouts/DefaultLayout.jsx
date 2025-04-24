import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  console.log("DefaultLayout");
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
