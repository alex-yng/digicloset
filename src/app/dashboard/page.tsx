"use client";

import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user }: any = useAuthContext();
  const router = useRouter();
  const username = user?.email;

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return <h1 className='text-white text-4xl'>{`hello ${username}!`}</h1>;
}
