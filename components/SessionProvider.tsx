'use client'
import { SessionProvider as Provider } from "next-auth/react";
import { Session } from 'next-auth';

type props = {
    children: React.ReactNode;
    session:Session | null
}

function SessionProvider({children,session}:props) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default SessionProvider