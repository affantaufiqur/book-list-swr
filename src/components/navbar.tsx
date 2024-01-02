export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-2 items-center">
          <p>image here</p>
          <div className="flex flex-col ">
            <h1 className="text-lg">Bookoes</h1>
            <h3 className="text-sm text-gray-800">Rekomendasi Bukumu</h3>
          </div>
        </div>

        <div className="">
          <nav className="flex flex-row space-x-4">
            <a href="/">All</a>
            <a href="/latest">Latest</a>
            <a href="/top-picks">Top Picks</a>
          </nav>
        </div>

        <div className="flex flex-row space-x-2">
          <input
            className="px-4 py-1 rounded-md border-2 border-gray-200 placeholder:text-sm"
            type="search"
            placeholder="Search by title or authors..."
          />
          <button className="px-4 py-1 rounded-md border-2 border-[#8170F2] text-[#8170F2]">
            Edit List
          </button>
        </div>
      </div>
    </div>
  );
}
