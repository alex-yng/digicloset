"use client";

import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ClothesCard from "../ui/dashboard/ClothesCard";

export default function Dashboard() {
  const { user }: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  return (
    <>
      <h1 className='text-white text-4xl'>{user.email}</h1>
    </>
  );
}
