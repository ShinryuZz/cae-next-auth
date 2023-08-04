import React from "react";

import { useAuthContext } from "@/context/AuthContext";

export default function Home() {
  const { currentUser, id } = useAuthContext();

  return (
    <div className="flex flex-col max-w-lg mx-auto bg-white p-8 mt-40 gap-3 rounded-xl shadow shadow-slate-300">
      {currentUser ? (
        <>
          <h1 className="text-3xl font-medium">You logged in!</h1>
          <p className="text-slate-500">
            Successfully worked cae sample app 🎉
          </p>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl text-left">Your Information ☟</h2>

            <img
              src={currentUser.photoURL}
              alt="photo"
              className="rounded-full"
            />
            <ul className="flex flex-col gap-1 p-3 items-start">
              <li>UID in firebase: {currentUser.uid}</li>
              <li>ID in User table: {id}</li>
              <li>Name: {currentUser.displayName}</li>
              {/* <li>Email: {currentUser.email}</li> */}
              {currentUser.phoneNumber && (
                <li>Phone Number: {currentUser.phoneNumber}</li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-medium">Please log in!</h1>
          <p className="text-slate-500">Hi, welcome 👋</p>
        </>
      )}
    </div>
  );
}
