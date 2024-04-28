import { useState, useEffect } from "react";
import { handleClient } from "../services/kanvasService";
import { UserData } from "../interfaces/authData.interface";
import { useLocalstorage } from "./useLocalstorage";
import { TOKEN_USER_KEY } from "../constants/tokenKey";
import { stateAuth } from "../store/stateAuth";

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
  const [storedValue] = useLocalstorage(TOKEN_USER_KEY, "");
  const client = handleClient(storedValue ? storedValue.token : "");
  const setIsLoading = stateAuth((state) => state.setIsLoading);

  useEffect(() => {
    getData();
  }, []);

  /**
   * Function to fetch user data from the API.
   */
  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await client.users.getUserData();
      if (data) {
        const { uuid, firstname, email } = data;
        setDataUser({ id: uuid, firstname, email });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setDataUser({
          id: "No id data found",
          firstname: "No firstname data found",
          email: "No email data found",
        });
      }
    } catch (error) {
      // Handle error if fetching data fails
      console.error("Error fetching user data:", error);
    }
  };

  return { dataUser };
};

export default useGetInfoUser;
