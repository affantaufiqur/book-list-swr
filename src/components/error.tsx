export default function FetchError() {
    return (
        <div className="bg-purple-secondary my-12 flex flex-col items-center justify-center p-28">
            <p className="text-wrap text-4xl font-semibold text-purple-primary">
                Error fetching data, please try again later
            </p>
        </div>
    );
}
