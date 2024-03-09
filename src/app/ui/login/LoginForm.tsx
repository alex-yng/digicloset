"use client";

import Link from "next/link";

export default function LoginForm() {
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className='size-96 bg-concrete-600 dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col p-4 gap-4 justify-center items-center animate-slideFromLeft'>
      <h1 className='text-5xl text-center'>Sign In</h1>
      <h3 className='text-base text-center'>
        Sign in and get access your wardrobe now
      </h3>
      <input
        id='username'
        type='text'
        placeholder='Username'
        required
        className='px-2 py-1 outline-transparent rounded-xl bg-slate-600 hover:bg-slate-700 w-4/5 transition-colors duration-300'
      />
      <input
        id='password'
        type='password'
        placeholder='Password'
        required
        className='px-2 py-1 outline-transparent rounded-xl bg-slate-600 hover:bg-slate-700 w-4/5 transition-colors duration-300'
      />
      <div className='flex items-center gap-2 hover:text-concrete-300 transition-colors duration-300'>
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
        className='bg-ice-500 w-4/5 px-4 py-2 rounded-xl hover:bg-ice-600 transition-colors duration-300'
        onClick={(e) => handleLogin}
      >
        <Link href='/dashboard'>Login</Link>
      </button>
    </form>
  );
}
