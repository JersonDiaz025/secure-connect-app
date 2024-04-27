import { useState, useEffect } from "react";
import { client } from "../services/kanvasService";
import { UserData } from "../interfaces/AuthData";

/**
 * Custom hook to fetch user information.
 * @returns An object containing user data.
 */
const useGetInfoUser = (): { dataUser: UserData } => {
  const [dataUser, setDataUser] = useState<UserData>({
    id: "No data",
    firstname: "No data",
    email: "No data",
  });

  useEffect(() => {
    getData();
  }, []);

  /**
   * Function to fetch user data from the API.
   */
  const getData = async () => {
    try {
      const data = await client.users.getUserData();
      const { uuid, firstname, email } = data;
      setDataUser({ id: uuid, firstname, email });
    } catch (error) {
      // Handle error if fetching data fails
      console.error("Error fetching user data:", error);
    }
  };

  return { dataUser };
};

export default useGetInfoUser;
