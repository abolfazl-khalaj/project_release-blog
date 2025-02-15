'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {id:Math.floor(Math.random()), name: 'صفحه اصلی', href: '/p-admin' },
    {id:Math.floor(Math.random()), name: 'کاربران', href: '/p-admin/user' },
    {id:Math.floor(Math.random()), name: 'پیغامات', href: '/p-admin/contact' },
    {id:Math.floor(Math.random()), name: 'تیکت ها', href: '/p-admin/ticket' },
    {id:Math.floor(Math.random()), name: 'درخواست های انتشار مقاله', href: '/p-admin/req-blog' },
    {id:Math.floor(Math.random()), name: 'مقالات ما', href: '/p-admin/article' },
    {id:Math.floor(Math.random()), name: 'ساخت مقاله', href: '/p-admin/new-article' },
    {id:Math.floor(Math.random()), name: 'تنظیمات', href: '/p-admin/setting' }
];

export default function Aside() {
    const pathname = usePathname();

    return (
        <div className="relative min-h-screen">
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`block p-2 text-white rounded ${pathname === link.href ? 'bg-blue-500' : 'bg-gray-300 text-black'}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="absolute bottom-2 left-1 right-1 py-1 px-2 rounded bg-red-500">
                خروج
            </button>
        </div>
    );
}
