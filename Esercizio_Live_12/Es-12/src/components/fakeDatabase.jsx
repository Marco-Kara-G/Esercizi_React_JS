import { useState } from "react";
import { useFetch } from "../Custom_Hook/useFetch";
import { useEffect } from "react";

export function FakeDatabase() {
  const { data, loading } = useFetch(
    "https://fakerapi.it/api/v1/users?_quantity=18&_locale=it_IT&_seed=12456"
  );
  const [users, setUsers] = useState();
  useEffect(() => {
    if (data) {
      console.log(data);
      const userList = data.data;
      setUsers(userList);
      console.log(users);
    }
  }, [data]);
}
