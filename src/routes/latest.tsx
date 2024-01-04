import Header from "../components/header";
import { useFetchAllBooks } from "../hooks/fetch.hook";
import { truncateText } from "../utils/common";
import Spinner from "../components/spinner";

export default function Latest() {
    const { data, error, isLoading } = useFetchAllBooks();

    if (error) return <p>Error fetching data</p>;
    if (isLoading) return <Spinner />;

    const getLatestFourBooks = () => {
        return data?.data
            .sort((a, b) => {
                return a.created_at < b.created_at ? 1 : -1;
            })
            .slice(0, 4);
    };

    function formatDate(date: string) {
        const newDate = new Date(date);
        return newDate.toDateString();
    }

    return (
        <div className="container mx-auto">
            <section className="py-12">
                <Header
                    highlightedText="Latest"
                    text="Our Latest Collections"
                />
                <div className="flex flex-row space-x-4 py-8">
                    {getLatestFourBooks()?.map((book) => (
                        <div className="relative flex flex-col space-y-4">
                            <div className="absolute top-14 h-10 w-40 rounded-r-md bg-red-200">
                                <div className="flex h-full items-center justify-center">
                                    {formatDate(book.created_at)}
                                </div>
                            </div>
                            <img
                                src={book.image_url}
                                className="max-w- h-full rounded-md object-cover"
                                alt="hero"
                            />
                            <div className="flex flex-col space-y-2">
                                <a href={`/book/${book.id}`}>
                                    {truncateText(book.title, 80)}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
