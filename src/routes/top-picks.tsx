import BookSmall from "../components/book-small";
import FetchError from "../components/error";
import Header from "../components/header";
import Spinner from "../components/spinner";
import { useFetch } from "../hooks/fetch.hook";
import { TypeBooks } from "../utils/types/books.type";

export default function TopPicks() {
    const { data, error, isLoading } = useFetch<TypeBooks>("books");
    if (error) return <FetchError />;
    if (isLoading) return <Spinner />;

    function filterTopPicks() {
        return data?.data
            ?.filter((book) => book.is_top_pick === true)
            .sort((a, b) => (a.rating < b.rating ? 1 : -1))
            .slice(0, 4);
    }
    const filteredData = filterTopPicks();

    return (
        <div className="">
            <div className="py-12">
                <Header highlightedText="Top" text="Top Picks Collection" />
                <div className="mt-4 grid h-full grid-cols-12 gap-4">
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
