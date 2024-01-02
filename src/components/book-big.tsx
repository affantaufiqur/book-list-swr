import { truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";

type TypeBookBig = {
  data: TypeBooks | undefined;
};

export default function BookBig({ data }: TypeBookBig) {
  return (
    <div className="col-span-3">
      <div className="flex flex-row space-x-2">
        <img
          src={data?.data[2]?.image_url}
          alt="book 1"
          className="h-[340px] object-contain w-auto"
        />
        <div className="flex flex-col space-y-6 justify-between">
          <div className="flex flex-col space-y-1">
            <h1 className="font-medium text-lg">{data?.data[2]?.title}</h1>
            <h4 className="font-normal text-slate-800 text-md">
              By {data?.data[2]?.author.name}
            </h4>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="bg-yellow-200 size-12 inline-flex items-center justify-center rounded-full text-yellow-800">
              {data?.data[2]?.rating}
            </p>
          </div>
          <p>{truncateText(data?.data[2]?.synopsis as string, 100)}</p>
          <button className="rounded-md px-4 text-lg tracking-tight font-medium py-2 bg-transparent border-2 border-purple-primary text-purple-primary">
            Read Book
          </button>
        </div>
      </div>
    </div>
  );
}
