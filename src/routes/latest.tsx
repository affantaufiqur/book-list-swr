import Header from "../components/header";
import { useFetch } from "../hooks/fetch.hook";
import Spinner from "../components/spinner";
import BookSmall from "../components/book-small";
import { TypeBooks } from "../utils/types/books.type";

export default function Latest() {
    const { data, error, isLoading } = useFetch<TypeBooks>("books");

    if (error) return <p>Error fetching data</p>;
    if (isLoading) return <Spinner />;

    const getLatestFourBooks = () => {
        return data?.data
            .sort((a, b) => {
                return a.created_at < b.created_at ? 1 : -1;
            })
            .slice(0, 4);
    };

    const filteredData = getLatestFourBooks();

    return (
        <div className="container mx-auto">
            <section className="py-12">
                <Header
                    highlightedText="Latest"
                    text="Our Latest Collections"
                />
                <div className="mt-4 grid grid-cols-12 gap-6">
                    {filteredData?.map((book) => (
                        <BookSmall key={book.id} data={book} type="with-date" />
                    ))}
                </div>
            </section>
        </div>
    );
}
