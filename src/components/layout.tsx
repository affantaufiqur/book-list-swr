import { Outlet } from "@tanstack/react-router";
import Navbar from "./navbar";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "./footer";

export default function Layout() {
  return (
    <main className="py-2 font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools initialIsOpen={false} position="bottom-left" />
    </main>
  );
}
