import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "./footer";
import Navbar from "./navbar";
import NewsLetter from "./newsletter";

export default function Layout() {
    return (
        <main id="layout-root">
            <section className="container mx-auto py-2 font-poppins">
                <Navbar />
                <Outlet />
                <NewsLetter />
                <Footer />
                <TanStackRouterDevtools
                    initialIsOpen={false}
                    position="bottom-left"
                />
            </section>
        </main>
    );
}
