// useToken.js
import { useState } from "react";

export default function useToken() {
  const getToken = () => {};

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken,
  };
}
