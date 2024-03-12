"use client";

import signIn from "@/firebase/auth/signin";
import FormInput from "@/shared/FormInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { result, error } = await signIn(email, password);

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
      className='size-96 bg-concrete-600 dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col p-4 gap-4 justify-center items-center'
    >
      <h1 className='text-5xl text-center '>Sign In</h1>
      <h3 className='text-base text-center '>
        Sign in and get access your wardrobe now
      </h3>
      <FormInput
        id='email'
        type='email'
        placeholder='Email'
        required={true}
        className=''
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        id='password'
        type='password'
        placeholder='Password'
        required={true}
        className=''
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='flex items-center gap-2 hover:text-concrete-300 transition-colors duration-300 '>
        <input
          type='checkbox'
          name='remember'
          id='remember'
          className='appearance-none bg-slate-600 size-4 rounded checked:bg-ice-400 checked:border-transparent checked:ring-2 checked:ring-offset-2 checked:ring-ice-500 checked:ring-offset-slate-600 transition-colors duration-300'
        />
        <label htmlFor='remember' className='text-sm select-none'>
          Remember password
        </label>
      </div>
      <button
        type='submit'
        className='bg-ice-500 w-4/5 px-4 py-2 rounded-xl hover:bg-ice-600 transition-colors duration-300 '
      >
        Login
      </button>
      <Link
        href='/register'
        className='text:xs md:text-sm text-concrete-900 dark:text-sage-50 dark:hover:text-concrete-300 transition-colors duration-300'
      >
        {`Don't have an acount? Register here.`}
      </Link>
    </form>
  );
}
