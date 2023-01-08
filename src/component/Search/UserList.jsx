import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";

export default function UserList() {
  const { users, loading } = useContext(GithubContext);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <div className="card shadow-md compact side bg-base-100">
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                  <img src={user.avatar_url} alt="Profile" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="card-title text-black">{user.login}</h2>
              <a href="" className="text-black">
                Visit Profile
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
