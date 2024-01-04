import { useParams } from "@tanstack/react-router";
import { useFetchBookById } from "../hooks/fetch.hook";
import Spinner from "../components/spinner";
import Rating from "../components/rating";

export default function BookById() {
    const params = useParams({ strict: false });
    const { data, error, isLoading } = useFetchBookById(parseInt(params.id));

    if (error) return <p>Error fetching data</p>;
    if (isLoading) return <Spinner />;

    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-row space-x-4">
                <img
                    src={data?.image_url}
                    className="h-full w-auto object-contain"
                />
                <div className="flex flex-col space-y-4">
                    <p className="text-2xl font-semibold">{data?.title}</p>
                    <Rating rating={data?.rating as number} />
                </div>
            </div>
        </div>
    );
}
