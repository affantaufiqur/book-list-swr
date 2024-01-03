import { useQuery } from "@tanstack/react-query";
import { BASE_URL, truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";
import BookBig from "../components/book-big";
import BookSmall from "../components/book-small";
import NewsLetter from "../components/newsletter";
import Rating from "../components/rating";
import { Loader } from "lucide-react";

export default function Index() {
    const { data, error, isLoading } = useQuery<TypeBooks>({
        queryKey: ["fetch-book"],
        queryFn: async () => {
            const req = await fetch(`${BASE_URL}/api/books`);
            const data = await req.json();
            return data;
        },
    });

    if (error) return <p>Error fetching data</p>;
    if (isLoading)
        return (
            <div className="flex items-center justify-center py-12">
                <Loader className="size-6 animate-spin" />
            </div>
        );

    function takeFourItemsFromData() {
        return data?.data.slice(0, 4);
    }

    const slicedData = takeFourItemsFromData();

    return (
        <main className="container mx-auto min-h-screen py-4">
            <section className="flex flex-row justify-between rounded-md bg-[#F1F0FE] p-12">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-xl font-semibold tracking-tight text-purple-primary">
                        MUST READ
                    </h1>
                    <h1 className="max-w-lg text-[3rem] font-semibold tracking-tight">
                        {data?.data[0]?.title}
                    </h1>
                    <div className="flex max-w-lg flex-row items-center space-x-2">
                        <h4 className="text-slate-700">
                            {data?.data[0]?.author.name}
                        </h4>
                        <Rating rating={data?.data[0]?.rating as number} />
                    </div>
                    <p className="max-w-lg text-wrap leading-tight text-slate-700">
                        {truncateText(data?.data[0]?.synopsis as string, 100)}
                    </p>
                    <div className="flex flex-row space-x-4 pt-4">
                        <button className="rounded-md bg-purple-primary px-4 py-2 text-lg font-medium tracking-tight text-white">
                            Read Book
                        </button>

                        <button className="rounded-md border-2 border-purple-primary bg-transparent px-4 py-2 text-lg font-medium tracking-tight text-purple-primary">
                            See All Recomendation
                        </button>
                    </div>
                </div>
                <div className="relative inline-block">
                    <img
                        src={data?.data[0]?.image_url}
                        alt="hero"
                        className="absolute bottom-0 right-60 top-0 z-50 h-[340px] w-full rounded-md object-contain"
                    />
                    <img
                        src={data?.data[1]?.image_url}
                        alt="book 2"
                        className="absolute bottom-0 right-44 top-0 z-30 h-[340px] w-full object-contain"
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
                    {slicedData?.map((book) => (
                        <BookBig key={book.id} data={book} />
                    ))}
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
