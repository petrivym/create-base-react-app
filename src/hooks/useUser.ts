import { useEffect, useState } from "react";
import { getUser } from "../services/networking";

export const useUsers = () => {
  // const [users, setUsers] = useState< any | null>(null);

  useEffect(() => {
    getUser().then((_) => {
      console.log(_);
      return _;
    });
  }, []);

  return "Users";
};
