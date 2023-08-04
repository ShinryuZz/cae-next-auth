import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuthContext();

  // useEffect(() => {
  //   if (!currentUser && !loading) {
  // router.push("/");
  //   }
  // }, [currentUser, loading]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="relative flex w-full items-center justify-between bg-white border-gray-200 p-6 shadow-lg">
      <Link href="/" className="text-center text-neutral-800">
        <h1 className="text-2xl">CAE Sample App</h1>
      </Link>

      {currentUser && (
        <div className="flex items-center justify-center">
          Hi, {currentUser.email}
        </div>
      )}

      <div className="flex items-center">
        {currentUser ? (
          <a
            href="#"
            className="border border-blue-600 rounded-lg text-sm px-4 py-2"
            onClick={handleLogout}
          >
            Log out
          </a>
        ) : (
          <a
            href="/login"
            className="text-white bg-blue-600 rounded-lg text-sm px-4 py-2"
          >
            Log in
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
