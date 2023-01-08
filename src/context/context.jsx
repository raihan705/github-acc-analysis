import React, { createContext, useState } from "react";
import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";

// create a context for data passing to other component from this context xomponent
const GithubContext = createContext();

// create a provider to pass value

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //Search users
  const searchUsers = async (searchName) => {
    setLoading();
    const params = new URLSearchParams({
      q: searchName,
    });
    const result = await fetch(`https://api.github.com/search/users?${params}`);
    const { items } = await result.json();

    setUsers(...users, items);
    setLoading(false);
  };

  console.log(users);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubRepos,
        githubFollowers,
        searchUsers,
        loading,
        users,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
