import { useState } from "react";
import useSWR from "swr";

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

type Data = {
  isbn: string;
  name: string;
  author: string;
  coverSrc: string;
  abstract: string;
};

async function fetcher(query: string) {
  const res = await fetch(`${ENDPOINT}?searchTerm=${query}`);
  const json = await res.json();
  return json;
}

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSWR(query, fetcher);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setQuery(input);
  }

  return (
    <>
      <div className="container mx-auto py-12 flex flex-col">
        <form className="flex flex-row space-x-2 justify-center">
          <input
            className="border-2 border-gray-400 p-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            onClick={handleOnClick}
            className="bg-black p-2 text-white"
          >
            Search
          </button>
        </form>
        <div className="my-4 text-center">
          {isLoading ? null : data?.results?.length >= 0 ? null : "Welcome"}
          {isLoading
            ? "searching..."
            : data?.results?.length === 0
              ? "No results"
              : data?.results?.map((book: Data, i: number) => (
                  <div
                    className="flex flex-row justify-between space-y-4"
                    key={book.isbn}
                  >
                    <p>
                      {i + 1}. {book.name}
                    </p>
                    <p>{book.author}</p>
                  </div>
                ))}
          {data?.error ? <p>{data.error}</p> : null}
        </div>
      </div>
    </>
  );
}

export default App;
