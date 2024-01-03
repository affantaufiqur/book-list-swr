import { TypeBooks } from "../utils/types/books.type";
import Rating from "./rating";

type TypeBookSmall = {
	data: TypeBooks | undefined;
	type?: "normal" | "with-date" | "with-picks";
};

export default function BookSmall({ data }: TypeBookSmall) {
	return (
		<div className="col-span-3 flex flex-col space-y-2">
			<img src={data?.data[0]?.image_url} alt="hero" className="h-auto w-full rounded-md object-contain" />
			<p className="text-lg font-semibold">{data?.data[0]?.title}</p>
			<p className="text-md font-normal text-slate-800">By {data?.data[0]?.author.name}</p>
			<div className="py-4">
				<Rating rating={data?.data[0]?.rating as number} />
			</div>
			<button className="w-full rounded-md border-2 border-purple-primary px-4 py-2 text-lg font-medium tracking-tight text-purple-primary">
				Read Book
			</button>
		</div>
	);
}
