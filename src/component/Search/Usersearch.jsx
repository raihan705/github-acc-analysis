import React, { useContext, useState } from "react";
import { GithubContext } from "../../context/context";

export default function Usersearch() {
  const { searchUsers } = useContext(GithubContext);
  const [searchName, setSearchName] = useState("");
  const handleChange = (e) => setSearchName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchName === "") {
      console.log("please enter somthing to the search box", "error");
    } else {
      searchUsers(searchName);
      setSearchName("");
    }
  };

  return (
    <div
      className="grid
      grid-cols-1
      xl:grid-cols-2
      lg:grid-cols-2
      md:grid-cols-2
      mb-8
      gap-8"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={searchName}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
