import BookBig from "../components/book-big";
import BookSmall from "../components/book-small";
import FetchError from "../components/error";
import Rating from "../components/rating";
import Spinner from "../components/spinner";
import { useFetch } from "../hooks/fetch.hook";
import { truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";

export default function Index() {
    const { data, error, isLoading } = useFetch<TypeBooks>("books");

    if (error) return <FetchError />;
    if (isLoading) return <Spinner />;

    function takeFourItemsFromData() {
        return data?.data.slice(0, 4);
    }

    const slicedData = takeFourItemsFromData();

    return (
        <main className=" min-h-screen py-4">
            <section className="flex flex-row justify-between rounded-md bg-[#F1F0FE] p-12">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-purple-primary">
                        MUST READ
                    </h3>
                    <h1 className="max-w-lg text-[3rem] font-semibold tracking-tight">
                        {truncateText(data?.data[0]?.title as string, 50)}
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
                        <a
                            href={`/book/${data?.data[0]?.id}`}
                            className="inline-flex items-center justify-center rounded-md bg-purple-primary px-4 py-2 text-lg font-medium tracking-tight text-white"
                        >
                            Read Book
                        </a>

                        <button className="rounded-md border-2 border-purple-primary bg-transparent px-4 py-2 text-lg font-medium tracking-tight text-purple-primary">
                            See All Recomendation
                        </button>
                    </div>
                </div>
                {/* I give up help */}
                <div className="relative *:rounded-md *:object-contain">
                    <img
                        src={data?.data[8]?.image_url}
                        alt="book 2"
                        className="absolute bottom-0 right-52 top-0 z-30 h-[360px] scale-75"
                    />
                    <img
                        src={data?.data[4]?.image_url}
                        alt="book 3"
                        className="absolute bottom-0 right-28 h-[360px] scale-50"
                    />
                    <img
                        src={data?.data[0]?.image_url}
                        alt="hero"
                        className="relative right-[20rem] z-50 h-[380px]"
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
            <section className="py-8">
                <div className="grid h-full grid-cols-12 gap-4">
                    {slicedData?.map((data) => (
                        <BookSmall data={data} type="normal" key={data.id} />
                    ))}
                </div>
            </section>
        </main>
    );
}
