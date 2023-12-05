import { useState } from "react";

export default function useToken() {
  const [token, setToken] = useState();

  const saveToken = (userToken) => {
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
}
