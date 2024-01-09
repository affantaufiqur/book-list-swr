import { formatDate, truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";
import Rating from "./rating";

type TypeBookSmall = {
    data: TypeBooks["data"][number];
    type?: "normal" | "with-date" | "with-picks";
    index?: number;
};

export default function BookSmall({ data, type, index }: TypeBookSmall) {
    return (
        <div className="relative col-span-3 flex flex-col space-y-2">
            {type === "normal" ? null : (
                <div className="absolute top-14 h-10 w-40 rounded-r-md bg-purple-primary">
                    {type === "with-picks" ? (
                        <div className="flex h-full items-center justify-end pr-2 text-purple-primary">
                            <p className="inline-flex size-8 items-center justify-center rounded-full bg-white">
                                {/* @ts-expect-error index could be undefined*/}
                                {index + 1}
                            </p>
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center text-white">
                            {formatDate(data.created_at)}
                        </div>
                    )}
                </div>
            )}
            <div className="h-full w-full">
                <img
                    src={data.image_url}
                    alt={data.title}
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col space-y-1">
                <p className="text-lg font-semibold">
                    {truncateText(data.title)}
                </p>
                <p className="text-md font-normal text-slate-800">
                    By {data.author.name}
                </p>
            </div>
            <div className="py-4">
                <Rating rating={data.rating as number} />
            </div>
            <a
                href={`/book/${data.id}`}
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-purple-primary px-4 py-2 text-lg font-medium tracking-tight text-purple-primary"
            >
                Read Book
            </a>
        </div>
    );
}
