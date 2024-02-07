import Header from "../components/header";
import { useMatchRoute, useRouter } from "@tanstack/react-router";
import { useFetch } from "../hooks/fetch.hook";
import Spinner from "../components/spinner";
import { TypeBooks } from "../utils/types/books.type";
import BookSmall from "../components/book-small";
import FetchError from "../components/error";

export default function Search() {
  const router = useRouter();
  const query = router.state.location.search.query;

  // make things works idk
  // this will reload the page when the search query params update
  // @ts-expect-error unused variable
  const _ = useMatchRoute();

  const { data, error, isLoading } = useFetch<TypeBooks>(
    `books?search=${query}`,
  );

  if (error) return <FetchError />;
  if (isLoading) return <Spinner />;

  return (
    <div className="">
      <div className="py-12">
        <Header
          highlightedText="Search For"
          text={`Search For ${query === undefined ? "" : query}`}
        />
        {data?.data?.length === 0 ? (
          <div className="my-12 rounded-md border-[1px] border-purple-primary p-56">
            <h1 className="text-center text-8xl font-medium text-purple-primary">
              Book Not Found.
            </h1>
          </div>
        ) : (
          <div className="my-4 grid grid-cols-12 gap-4">
            {data?.data?.map((book) => (
              <BookSmall key={book.id} data={book} type="normal" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
