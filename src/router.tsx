import {
    NotFoundRoute,
    RootRoute,
    Route,
    Router,
} from "@tanstack/react-router";
import Layout from "./components/layout";
import Index from "./routes/index.tsx";
import Latest from "./routes/latest.tsx";
import TopPicks from "./routes/top-picks.tsx";
import Search from "./routes/search.tsx";
import NotFound from "./routes/not-found.tsx";

const rootRoute = new RootRoute({
    component: () => (
        <>
            <Layout />
        </>
    ),
});

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Index />,
});

const latestRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/latest",
    component: () => <Latest />,
});

const topPicksRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/top-picks",
    component: () => <TopPicks />,
});

const searchRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/search",
    validateSearch: (search) => {
        return search;
    },
    component: () => <Search />,
});

const notFoundRoute = new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: () => <NotFound />,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    latestRoute,
    topPicksRoute,
    searchRoute,
]);
export const router = new Router({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
