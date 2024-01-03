import { RootRoute, Route, Router } from "@tanstack/react-router";
import Layout from "./components/layout";
import Index from "./routes/index.tsx";
import Latest from "./routes/latest.tsx";
import TopPicks from "./routes/top-picks.tsx";

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

const routeTree = rootRoute.addChildren([indexRoute, latestRoute, topPicksRoute]);
export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
