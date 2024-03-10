import getDocument from "@/firebase/firestore/getData";

interface HeaderProps {
  email: string;
}

export default async function Header({ email }: HeaderProps) {
  const userData = await getDocument("users", email);

  return <h1 className='text-white text-4xl'>{email}</h1>;
}
