import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useContext } from "react";
import LoaderContext from "../context/LoaderContext";

export default function DefaultLayout() {
  const { isLoading } = useContext(LoaderContext);
  return (
    <>
      {isLoading && <Loader />}
      <header>
        <Nav />
      </header>
      <main className="flex-grow-1 my-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
