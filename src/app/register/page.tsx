import Link from "next/link";
import RegisterForm from "@/app/ui/register/RegisterForm";

export default function Register() {
  return (
    <section className='container mx-auto h-screen w-full grid place-items-center text-sage-50'>
      <div className='absolute top-4 left-4 bg-slate-200 dark:bg-slate-900 z-0'>
        <Link href='/'>
          <span className='text-xl text-concrete-900 dark:text-sage-50 hover:text-concrete-300 transition-colors duration-300'>
            ← Back to home
          </span>
        </Link>
      </div>
      <RegisterForm />
    </section>
  );
}
