import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";

export default function UserList() {
  const { users, loading } = useContext(GithubContext);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}
