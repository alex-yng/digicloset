"use client";

import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Header from "../ui/dashboard/Header";

export default function Dashboard() {
  const { user }: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  return <Header email={user.email} />;
}
