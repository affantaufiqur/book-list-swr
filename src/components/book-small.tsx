import { TypeBooks } from "../utils/types/books.type";
import Rating from "./rating";

type TypeBookSmall = {
    data: TypeBooks["data"][number];
    type?: "normal" | "with-date" | "with-picks";
};

export default function BookSmall({ data }: TypeBookSmall) {
    return (
        <div className="col-span-3 flex flex-col space-y-2">
            <img
                src={data.image_url}
                alt="hero"
                className="h-full w-full rounded-md object-contain"
            />
            <p className="text-lg font-semibold">{data.title}</p>
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
