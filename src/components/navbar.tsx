import { Search } from "lucide-react";
import Brand from "./brand";
import { useRouter } from "@tanstack/react-router";

export default function Navbar() {
	const router = useRouter();
	console.log(router.state.location.href);

	const routes = [
		{
			pathName: "/",
			href: "/",
            name: 'All'
		},
		{
			pathName: "/latest",
			href: "/latest",
            name: 'Latest'
		},
		{
			pathName: "/top-picks",
			href: "/top-picks",
            name: "Top Picks"
		},
	];

	return (
		<div className="container mx-auto">
			<div className="flex flex-row items-center justify-between">
				<Brand />
				<div className="">
					<nav className="flex flex-row space-x-4">
						{routes.map((route, index) => (
							<a
								href={route.href}
								className={`text-sm font-medium ${
									router.state.location.href === route.href ? "text-purple-primary" : "text-slate-800"
								}`}
								key={index}
							>
								{route.name}
							</a>
						))}
					</nav>
				</div>

				<div className="flex flex-row space-x-2">
					<div className="relative">
						<Search className="absolute bottom-0 left-2 top-[25%] size-4 text-gray-400 " />
						<input
							className="rounded-md border-[1px] border-gray-200 px-8 py-1 placeholder:text-sm focus:outline-purple-primary focus:ring-purple-primary"
							type="search"
							placeholder="Search by title or authors..."
						/>
					</div>
					<button className="rounded-md border-2 border-[#8170F2] px-4 py-1 text-[#8170F2]">Edit List</button>
				</div>
			</div>
		</div>
	);
}
