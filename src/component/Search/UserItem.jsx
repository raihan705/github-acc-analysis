import React from "react";
import { Link } from "react-router-dom";

export default function UserItem({ user }) {
  const { avatar_url, login } = user;
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title text-black">{login}</h2>
          <Link to="" className="text-black">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
