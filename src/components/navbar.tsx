import { Search } from "lucide-react";
import Brand from "./brand";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import Button from "./button";

const routes = [
    {
        pathName: "/",
        href: "/",
        name: "All",
    },
    {
        pathName: "/latest",
        href: "/latest",
        name: "Latest",
    },
    {
        pathName: "/top-picks",
        href: "/top-picks",
        name: "Top Picks",
    },
];

export default function Navbar() {
    const router = useRouter();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        navigate({ from: "/search", to: "/search", search: { query: input } });
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-row items-center justify-between">
                <Brand />
                <nav className="flex flex-row space-x-4">
                    {routes.map((route, index) => (
                        <a
                            href={route.href}
                            className={`text-sm font-medium ${
                                router.state.location.href === route.href
                                    ? "text-purple-primary underline underline-offset-2"
                                    : "text-slate-800 hover:underline"
                            }`}
                            key={index}
                        >
                            {route.name}
                        </a>
                    ))}
                </nav>
                <div className="flex flex-row space-x-3">
                    <form
                        className="relative flex flex-row space-x-2"
                        onSubmit={onSubmit}
                    >
                        <Search className="absolute bottom-0 left-4 top-[31%] size-4 text-gray-400 " />
                        <input
                            className="rounded-md border-[1px] border-gray-200 px-8 py-2 text-sm placeholder:text-sm focus:border-purple-primary focus:outline-purple-primary md:w-[300px]"
                            type="search"
                            placeholder="Search by title or authors..."
                            required={true}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </form>
                    <Button state="secondary">Edit List</Button>
                </div>
            </div>
        </div>
    );
}
