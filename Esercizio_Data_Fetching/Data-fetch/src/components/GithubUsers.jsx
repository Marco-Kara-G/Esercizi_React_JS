// Create a new GithubUsers component that has a form with a text input and a submit button. The input will be used for searching a user by providing their username. Each user will be displayed in a list, where each list item is a GithubUser component. These components will take username as a prop.

import { useEffect, useState } from "react";

export function GithubUsers() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("");
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${user}`);

        if (!response.ok) {
          throw new Error("Fail to load Data...");
        }
        const data = await response.json();
        setUserList((prevUserList) => [...prevUserList, data]);
      } catch (error) {
        seterror(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleSearch = (event) => {
    event.preventDefault();
    const usernameInput = event.target.username.value.trim();

    if (usernameInput) {
      setUser(usernameInput);
    }
  };

  return (
    <>
      <form action="submit" onSubmit={handleSearch}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Input a username..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {" "}
        {userList.map((user) => (
          <li key={user.id}>
            <p>{user.login}</p>
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              width="50"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
