'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Header() {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/p-admin")
    const router = useRouter()
    const [valueSearch , setValueSearch] = useState<string>('')

    const searchingBlog = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === 'Enter'){
            redirectSearching()
        }
    };
    const redirectSearching = () => {
        router.push(`/search?query=${valueSearch}`)
    }
    
    return (
        <>
        {
            !isDashboard ?
            (
                <div className="flex justify-center border-b shadow-md bg-white h-20 w-full ">
                    <div className=" w-10/12 h-full mx-auto flex justify-between items-center ">
                        <nav className="flex gap-x-6 text-lg ">
        
                            <Link href={'/blog'} className={`${pathname === '/blog' ? 'text-blue-600':'text-gray-800'} hover:text-gray-500 transition`}>فرآورده</Link>
        
                            <Link href={'/your_blog'} className={`${pathname === '/your_blog' ? 'text-blue-600':'text-gray-800'} hover:text-gray-500 transition`}>مقالات شما</Link>
        
        
                            <Link href={'/connect'} className={`${pathname === '/connect' ? 'text-blue-600':'text-gray-800'} hover:text-gray-500 transition`}>درباره ما | ارتباطات</Link>
        
                        </nav>
                        <div className="flex items-center gap-x-6">
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="جستجوی مقاله..." 
                                    className="pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-gray-400 outline-none transition"
                                    onChange={(e)=>setValueSearch(e.target.value)}
                                    onKeyDown={searchingBlog}
                                />
                                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-blue-500"   size={18} 
                                onClick={redirectSearching}/>
                            </div>
                            <Link href={'/my_account'} className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                                ثبت نام / ورود
                            </Link>
                        </div>
                    </div>
                </div>
            ):(
                <div>

                </div>
            )
        }
        </>
    );
}