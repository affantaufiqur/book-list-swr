export default function NewsLetter() {
  return (
    <div className="bg-purple-primary p-28 rounded-md">
      <h1 className="text-center text-white text-4xl font-medium tracking-tight leading-normal">
        Join our Newsletter to get our latest recomendation!
      </h1>
      <div className="flex flex-row space-x-2 my-2 justify-center">
        <input
          className="px-4 py-1 rounded-md"
          placeholder="Enter your email"
        />
        <button className="p-4 bg-violet-200 rounded-md">Submit</button>
      </div>
    </div>
  );
}
