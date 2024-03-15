"use client"
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      {!session ? (
        <>
          <p>You are not signed in</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signIn()}>
            Sign in
          </button>
        </>
      ) : (
        <>
          <p>Signed in as {session.user.email}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
