import { truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";
import Rating from "./rating";

type TypeBookSmall = {
    data: TypeBooks["data"][number];
    type?: "normal" | "with-date" | "with-picks";
    index?: number;
};

export default function BookSmall({ data, type, index }: TypeBookSmall) {
    function formatDate(dateString: string): string {
        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
            throw new Error("Invalid date string");
        }

        const day: string | number = date.getDate();
        const month: string | number = date.getMonth() + 1;
        const year: number = date.getFullYear();

        const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }

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
            {/* I give up*/}
            <div className="h-full w-full">
                <img
                    src={data.image_url}
                    alt="hero"
                    className="h-full w-full rounded-md object-contain"
                />
            </div>
            <p className="text-lg font-semibold">{truncateText(data.title)}</p>
            <p className="text-md font-normal text-slate-800">
                By {data.author.name}
            </p>
            <div className="py-4">
                <Rating rating={data.rating as number} />
            </div>
            <button className="w-full rounded-md border-2 border-purple-primary px-4 py-2 text-lg font-medium tracking-tight text-purple-primary">
                Read Book
            </button>
        </div>
    );
}
