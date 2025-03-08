'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {name: 'صفحه اصلی', href: '/p-admin' },
    {name: 'کاربران', href: '/p-admin/user' },
    {name: 'پیغامات', href: '/p-admin/contact' },
    {name: 'تیکت ها', href: '/p-admin/ticket' },
    {name: 'درخواست های انتشار مقاله', href: '/p-admin/req-blog' },
    {name: 'مقالات ما', href: '/p-admin/article' },
    {name: 'ساخت مقاله', href: '/p-admin/new-article' },
    {name: 'تنظیمات', href: '/p-admin/setting' }
];

export default function Aside() {
    const pathname = usePathname();

    return (
        <div>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`block p-2 rounded ${pathname === link.href ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
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
