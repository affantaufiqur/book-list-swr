export default function FetchError() {
  return (
    <div className="my-12 flex flex-col items-center justify-center bg-purple-secondary p-28">
      <p className="text-wrap text-4xl font-semibold text-purple-primary">
        Error fetching data, please try again later
      </p>
    </div>
  );
}
