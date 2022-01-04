import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow">
      <div className="container flex flex-row w-full justify-center items-center p-2 md:px-4 lg:px-6 overflow-hidden">
        {/* logo */}
        <div className="font-bold text-2xl px-4">Juicer</div>
        {/* searchbar container */}
        <div className="flex-1 max-w-screen-xl ">
          <div className=" rounded-l-3xl rounded-r-3xl flex flex-1 flex-row items-center bg-gray-100">
            <div className=" relative flex flex-row flex-1 rounded-l-3xl items-center text-gray-400 ">
              <div className="p-3 absolute hover:text-gray-900 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="flex-1 disabled:text-gray-500 pl-10 px-4 py-3 rounded-l-3xl rounded-r-3xl bg-gray-100 text-black h-full overflow-hidden"
                value="#aff (this is fixed)"
                disabled
              ></input>

              <div className="p-2 absolute right-4 cursor-pointer hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
