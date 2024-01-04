import BookSmall from "../components/book-small";
import Header from "../components/header";
import Spinner from "../components/spinner";
import { useFetch } from "../hooks/fetch.hook";
import { TypeBooks } from "../utils/types/books.type";

export default function TopPicks() {
    const { data, error, isLoading } = useFetch<TypeBooks>("books");
    if (error) return <p>Error fetching data</p>;
    if (isLoading) return <Spinner />;

    function filterTopPicks() {
        return data?.data
            ?.filter((book) => book.is_top_pick === true)
            .sort((a, b) => (a.rating < b.rating ? 1 : -1))
            .slice(0, 4);
    }
    const filteredData = filterTopPicks();

    return (
        <div className="container mx-auto">
            <div className="py-12">
                <Header highlightedText="Top" text="Top Picks Collection" />
                <div className="flex flex-row space-x-4 py-8">
                    {filteredData?.map((book, index) => (
                        <BookSmall
                            key={book.id}
                            data={book}
                            type="with-picks"
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
