import { Outlet } from "react-router";
import { Header } from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
