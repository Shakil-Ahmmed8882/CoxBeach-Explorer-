import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

function useAuth() {
  const all = useContext(AuthContext);
  return all;
}

export default useAuth;
