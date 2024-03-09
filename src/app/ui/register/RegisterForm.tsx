"use client";

import FormInput from "@/shared/FormInput";
import Link from "next/link";

export default function RegisterForm() {
  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className='min-h-96 max-w-96 bg-concrete-600 dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col p-4 gap-4 justify-center items-center'>
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
      />
      <FormInput
        id='username'
        type='text'
        placeholder='Username'
        required={true}
        className='animate-slideFromTop'
      />
      <FormInput
        id='password'
        type='password'
        placeholder='Password'
        required={true}
        className='animate-slideFromTop'
      />
      <button
        className='bg-ice-500 w-4/5 px-4 py-2 rounded-xl hover:bg-ice-600 transition-colors duration-300 animate-slideFromTop'
        onClick={(e) => handleRegister(e)}
      >
        <Link href='/dashboard'>Register</Link>
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
