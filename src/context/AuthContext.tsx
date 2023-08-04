import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { User } from "firebase/auth";

interface IAuthContext {
  currentUser: User | null;
  id?: number | null;
  verified?: boolean;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthCtx = createContext({} as IAuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { currentUser, isAuth, loading, verifyIdToken, id, logout } =
    useFirebaseAuth();

  const AuthContext: IAuthContext = {
    currentUser: currentUser,
    verified: isAuth,
    id: id,
    loading: loading,
    login: verifyIdToken,
    logout: logout,
  };

  return <AuthCtx.Provider value={AuthContext}>{children}</AuthCtx.Provider>;
};

export const useAuthContext = () => useContext(AuthCtx);
