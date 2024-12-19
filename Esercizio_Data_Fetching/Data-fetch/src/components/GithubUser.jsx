// Create a GithubUser component that receives a username prop and fetches the data of the corresponding Github user from the Github API. The component should render the user's name, login and avatar.

import { useEffect } from "react";
import { useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState([{}]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Errore nel caricamento dei dati");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  return (
    <div>
      {loading && <p>Caricamento dati in corso...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <div>
            <span>Full name: </span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>Login name: </span>
            <span>{user.login}</span>
          </div>
          <div>
            <img src={user.avatar_url} alt="profile picture" />
          </div>
        </div>
      )}
    </div>
  );
}
