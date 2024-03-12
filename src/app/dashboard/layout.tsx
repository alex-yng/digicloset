import SideNav from "@/app/ui/dashboard/SideNav";
import MobileNav from "../ui/dashboard/MobileNav";
import { AuthContextProvider } from "@/context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='fixed flex h-screen flex-col md:flex-row md:overflow-y-hidden'>
      <div className='hidden md:block w-full flex-none md:w-64'>
        <SideNav />
      </div>

      <div className='flex-grow md:overflow-y-auto'>{children}</div>
      <div className='flex md:hidden w-full flex-none'>
        <MobileNav />
      </div>
    </div>
  );
}
