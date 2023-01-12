const Navbar = () => {
  return (
    <header className="flex justify-between">
      <ul className="flex text-black">
        <li className="border-dotted border border-[#dbe4dc] rounded-full mx-2">
          <button className="bg-white font-medium py-2 px-4 rounded-full">
            Journey
          </button>
        </li>
        <li className="border-dotted border border-[#dbe4dc] rounded-full mx-2">
          <button className="bg-white font-medium py-2 px-4 rounded-full">
            Biography
          </button>
        </li>
        <li className="border-dotted border border-[#dbe4dc] rounded-full mx-2">
          <button className="bg-white font-medium py-2 px-4 rounded-full">
            Business
          </button>
        </li>
        <li className="border-dotted border border-[#dbe4dc] rounded-full mx-2">
          <button className="bg-white font-medium py-2 px-4 rounded-full">
            Romance
          </button>
        </li>
      </ul>
      <div className="flex items-center">
        <div className="flex space-x-1">
          <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 bg-white rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <img
            className="rounded-full w-10 h-10"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          ></img>
          <button className="px-4 bg-black rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
