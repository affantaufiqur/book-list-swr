import NotFoundImg from "../assets/Books.png";
export default function NotFound() {
    return (
        <div className="">
            <img
                src={NotFoundImg}
                alt="Not Found"
                className="mx-auto size-80 object-contain"
            />
            <div className="flex flex-col items-center justify-center space-y-6">
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-9xl tracking-widest text-purple-primary">
                        404
                    </h1>
                    <h3 className="text-4xl text-purple-primary">
                        Looks like you've got lost...
                    </h3>
                </div>
                <h6 className="text-lg">
                    The page you are looking for doesn't exist or has been
                    moved.
                </h6>
                <a
                    href="/"
                    className="rounded-md border-[1px] border-purple-primary px-4 py-1 text-purple-primary"
                >
                    Return to home
                </a>
            </div>
        </div>
    );
}
