export default function NewsLetter() {
  return (
    <div className="">
      <div className="rounded-md bg-purple-primary p-28">
        <h1 className="text-center text-4xl font-medium leading-normal tracking-tight text-white">
          Join our Newsletter to get our latest recomendation!
        </h1>
        <div className="my-2 flex flex-row justify-center space-x-2">
          <input
            className="rounded-md px-4 py-1"
            placeholder="Enter your email"
          />
          <button className="rounded-md bg-violet-200 p-4">Submit</button>
        </div>
      </div>
    </div>
  );
}
