import { useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";

import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

const useFirebaseAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result) {
      const user = result.user;
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      return user;
    }
  };

  const verifyIdToken = async () => {
    const user = await login();
    const token = await user?.getIdToken();

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
      },
    };

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const endPoint = "/auth";
    axios
      .post(baseUrl + endPoint, null, config)
      .then((res: AxiosResponse) => {
        console.log(res);
        if (res.data.user.id) {
          setIsAuth(true);
          setId(res.data.user.id);
        }
        router.push("/");
      })
      .catch((e) => {
        console.log("Error: ", e);
        alert(e);
      });
  };

  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
    setIsAuth(false);
    setId(null);
  };

  const logout = () => signOut(auth).then(clear);

  const handleAuthStateChange = async (user: User | null) => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setCurrentUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const nonregistered = onAuthStateChanged(auth, handleAuthStateChange);
    return nonregistered;
  }, []);

  return { currentUser, isAuth, id, verifyIdToken, loading, login, logout };
};

export { useFirebaseAuth };
