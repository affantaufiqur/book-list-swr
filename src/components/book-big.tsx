import { truncateText } from "../utils/common";
import { TypeBooks } from "../utils/types/books.type";
import Rating from "./rating";

type TypeBookBig = {
	data: TypeBooks["data"][number];
};

export default function BookBig({ data }: TypeBookBig) {
	return (
		<div className="col-span-3">
			<div className="flex flex-row space-x-4">
				<img src={data.image_url} alt="book 1" className="h-auto w-[277px] object-cover" />
				<div className="flex flex-col justify-between space-y-6">
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col space-y-1">
							<h1 className="text-2xl font-semibold">{data.title}</h1>
							<h4 className="text-[1.25rem] font-normal text-slate-800">By {data.author.name}</h4>
						</div>
						<div className="flex flex-row items-center space-x-4">
							<p className="inline-flex size-12 items-center justify-center rounded-full bg-yellow-200 text-yellow-800">
								{data.rating}
							</p>
							<Rating rating={data.rating as number} />
						</div>
					</div>
					<p>{truncateText(data.synopsis as string, 100)}</p>
					<button className="rounded-md border-2 border-purple-primary bg-transparent px-4 py-2 text-lg font-medium tracking-tight text-purple-primary">
						Read Book
					</button>
				</div>
			</div>
		</div>
	);
}
