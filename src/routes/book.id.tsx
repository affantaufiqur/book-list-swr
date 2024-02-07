import { useParams } from "@tanstack/react-router";
import { useFetch } from "../hooks/fetch.hook";
import Spinner from "../components/spinner";
import Rating from "../components/rating";
import { TypeSingleBook } from "../utils/types/books.type";
import { truncateText } from "../utils/common";
import FetchError from "../components/error";

export default function BookById() {
  const params = useParams({ strict: false });
  const { data, error, isLoading } = useFetch<TypeSingleBook>(
    `books/${params.id}`,
  );

  if (error) return <FetchError />;
  if (isLoading) return <Spinner />;

  function formatDate(date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="py-12">
      <div className="flex flex-row items-start space-x-12">
        <img
          src={data?.image_url}
          className="h-full max-w-[720px] rounded-md object-contain"
        />
        <div className="flex flex-col justify-between space-y-4 px-12">
          <div className="flex flex-col space-y-4">
            <h1 className="text-[3.875rem] font-semibold leading-tight tracking-tight">
              {truncateText(data?.title as string, 120)}
            </h1>
            <h4 className="text-4xl font-normal text-slate-800">
              By {data?.author.name}
            </h4>
            <div className="flex flex-row items-center space-x-4">
              <p className="inline-flex size-12 items-center justify-center rounded-full bg-yellow-300 text-sm font-bold text-yellow-800">
                {data?.rating}
              </p>
              <Rating rating={data?.rating as number} />
            </div>
          </div>
          <article className="leading-relaxed tracking-wide text-slate-800">
            {data?.synopsis}
          </article>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-400">
              First published at {formatDate(data?.created_at as string)}
            </p>
            <p className="text-sm text-gray-400">Full title: {data?.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
