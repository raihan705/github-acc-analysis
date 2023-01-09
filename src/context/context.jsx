import React, { createContext, useState } from "react";

// create a context for data passing to other component from this context xomponent
const GithubContext = createContext();

// create a provider to pass value

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState({});
  const [githubRepos, setGithubRepos] = useState([]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //Search users
  const searchUsers = async (searchName) => {
    const params = new URLSearchParams({
      q: searchName,
    });
    const result = await fetch(`https://api.github.com/search/users?${params}`);
    const { items } = await result.json();

    setUsers(...users, items);
    setLoading(false);
  };

  // get single user data

  const getSingleUserData = async (login) => {
    const response = await fetch(`https://api.github.com/users/${login}`);
    if (response.status === 404) {
      console.log("data is not gound");
    } else {
      const data = await response.json();
      setGithubUser(data);
    }
  };

  // get single user  repo

  const getSingleUserDataRepo = async (login) => {
    const response = await fetch(
      `https://api.github.com/users/${login}/repos?per_page=100`
    );
    if (response.status === 404) {
      console.log("data is not gound");
    } else {
      const data = await response.json();
      setGithubRepos(data);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        githubRepos,
        searchUsers,
        loading,
        users,
        getSingleUserData,
        getSingleUserDataRepo,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export { GithubProvider, GithubContext };
