import { useRouter } from "@tanstack/react-router";
import { useFetchBookById } from "../hooks/fetch.hook";
import Spinner from "../components/spinner";

export default function BookById() {
    const router = useRouter();
    const params = router.state.location.href.split("/").at(-1);
    const { data, error, isLoading } = useFetchBookById(
        parseInt(params as string),
    );

    if (error) return <p>Error fetching data</p>;
    if (isLoading) return <Spinner />;

    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-row space-x-4">
                <img
                    src={data?.image_url}
                    className="h-full w-auto object-contain"
                />
                <p className="text-2xl font-semibold">{data?.title}</p>
            </div>
        </div>
    );
}
