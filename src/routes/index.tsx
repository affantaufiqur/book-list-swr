import { useQuery } from "@tanstack/react-query";
import { BASE_URL, truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";
import BookBig from "../components/book-big";
import BookSmall from "../components/book-small";
import NewsLetter from "../components/newsletter";

export default function Index() {
  const { data, error, isLoading } = useQuery<TypeBooks>({
    queryKey: ["fetch-hero-book"],
    queryFn: async () => {
      const req = await fetch(`${BASE_URL}/api/books`);
      const data = await req.json();
      return data;
    },
  });

  if (error) return <p>Error fetching data</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="py-4 min-h-screen container mx-auto">
      <section className="flex flex-row justify-between p-12 bg-[#F1F0FE] rounded-md">
        <div className="flex flex-col space-y-3">
          <h1 className="font-semibold text-xl text-purple-primary tracking-tight">
            MUST READ
          </h1>
          <h1 className="tracking-tight text-[3rem] max-w-lg font-semibold">
            {data?.data[0]?.title}
          </h1>
          <div className="flex flex-row space-x-2 max-w-lg">
            <h4 className="text-slate-700">{data?.data[0]?.author.name}</h4>
            <span>{data?.data[0].rating}</span>
          </div>
          <p className="text-wrap max-w-lg leading-tight text-slate-700">
            {truncateText(data?.data[0]?.synopsis as string, 100)}
          </p>
          <div className="flex flex-row space-x-4 pt-4">
            <button className="rounded-md text-white px-4 text-lg tracking-tight font-medium py-2 bg-purple-primary">
              Read Book
            </button>

            <button className="rounded-md px-4 text-lg tracking-tight font-medium py-2 bg-transparent border-2 border-purple-primary text-purple-primary">
              See All Recomendation
            </button>
          </div>
        </div>
        <div className="relative inline-block">
          <img
            src={data?.data[0]?.image_url}
            alt="hero"
            className="h-[340px] rounded-md object-contain w-full absolute top-0 right-60 bottom-0 z-50"
          />
          <img
            src={data?.data[1]?.image_url}
            alt="book 2"
            className="h-[340px] object-contain w-full absolute top-0 right-44 bottom-0 z-30"
          />
          <img
            src={data?.data[4]?.image_url}
            alt="book 3"
            className="h-[340px]"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="grid grid-cols-6 gap-16">
          <BookBig data={data} />
          <BookBig data={data} />
          <BookBig data={data} />
          <BookBig data={data} />
        </div>
      </section>
      <section className="py-12">
        <div className="grid grid-cols-12 gap-14">
          <BookSmall data={data} />
          <BookSmall data={data} />
          <BookSmall data={data} />
          <BookSmall data={data} />
        </div>
      </section>
      <NewsLetter />
    </main>
  );
}
