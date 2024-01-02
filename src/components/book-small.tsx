import { TypeBooks } from "../utils/types/books.type";

type TypeBookSmall = {
  data: TypeBooks | undefined;
};
export default function BookSmall({ data }: TypeBookSmall) {
  return (
    <div className="col-span-3 flex flex-col space-y-2">
      <img
        src={data?.data[0]?.image_url}
        alt="hero"
        className="h-auto rounded-md object-contain w-full"
      />
      <p className="text-lg font-semibold">{data?.data[0]?.title}</p>
      <p className="text-md font-normal text-slate-800">
        By {data?.data[0]?.author.name}
      </p>
      <p>{data?.data[0]?.rating}</p>
      <button className="w-full rounded-md text-purple-primary px-4 text-lg tracking-tight font-medium py-2 border-2 border-purple-primary">
        Read Book
      </button>
    </div>
  );
}
