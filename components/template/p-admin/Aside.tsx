'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Aside(){

    const pathname = usePathname();
    
    return (
        <div className="relative min-h-screen">
            <ul className="space-y-3">
                <li>
                    <Link href="/p-admin" className={`
                    ${pathname === '/p-admin' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        صفحه اصلی
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/user" className={`
                    ${pathname === '/p-admin/user' ?  'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        کاربران
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/contact" className={`
                    ${pathname === '/p-admin/contact' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        پیغامات
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/ticket" className={`
                    ${pathname === '/p-admin/ticket' ?  'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        تیکت ها
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/req-blog" className={`
                    ${pathname === '/p-admin/req-blog' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        درخواست های انتشار مقاله
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/article" className={`
                    ${pathname === '/p-admin/article' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        مقالات ما
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/new-article" className={`
                    ${pathname === '/p-admin/new-article' ?  'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        ساخت مقاله
                    </Link>
                </li>
                <li>
                    <Link href="/p-admin/setting" className={`
                    ${pathname === '/p-admin/setting' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}
                    block p-2  text-white rounded`}>
                        تنظیمات
                    </Link>
                </li>
            </ul>
            <button className="absolute bottom-2 left-1 right-1 py-1 px-2 rounded bg-red-500">
                خروج
            </button>
        </div>
    )
}