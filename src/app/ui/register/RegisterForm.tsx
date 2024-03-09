"use client";

import FormInput from "@/shared/FormInput";
import signUp from "@/firebase/auth/signup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleForm}
      className='min-h-96 max-w-96 bg-concrete-600 dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col p-4 gap-4 justify-center items-center'
    >
      <h1 className='text-5xl text-center animate-slideFromTop'>Register</h1>
      <h3 className='text-base text-center animate-slideFromTop'>
        Register and get access your digital wardrobe now
      </h3>
      <FormInput
        id='email'
        type='email'
        placeholder='Email'
        required={true}
        className='animate-slideFromTop'
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        id='password'
        type='password'
        placeholder='Password'
        required={true}
        className='animate-slideFromTop'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className='bg-ice-500 w-4/5 px-4 py-2 rounded-xl hover:bg-ice-600 transition-colors duration-300 animate-slideFromTop'
        type='submit'
      >
        Register
      </button>
      <Link
        href='/login'
        className='text:xs md:text-sm text-concrete-900 dark:text-sage-50 dark:hover:text-concrete-300 transition-colors duration-300'
      >
        Already have an acount? Login here.
      </Link>
    </form>
  );
}
