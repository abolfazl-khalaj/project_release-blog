import Image from "next/image";
import Link from "next/link";
import img from '@/public/images.jpg';

export default function AuthorProfile() {
    // لیست مقالات کاربر
    const articles = [
        { id: 1, title: "راهنمای جامع دیزاین پترن‌ها", date: "1402/11/20", link: "/article/1" },
        { id: 2, title: "۱۰ نکته برای بهینه‌سازی کدهای React", date: "1402/10/15", link: "/article/2" },
        { id: 3, title: "چگونه یک پروژه فول استک راه‌اندازی کنیم؟", date: "1402/09/05", link: "/article/3" }
    ];

    return (
        <div className="max-w-2xl mx-auto mt-7 bg-white shadow-lg rounded-lg p-6 text-center">
            {/* تصویر پروفایل */}
            <div className="flex justify-center">
                <Image 
                    quality={100} 
                    src={img} 
                    alt="Profile Picture" 
                    width={120} 
                    height={120} 
                    className="rounded-full border-4 border-gray-300 shadow-md"
                />
            </div>

            {/* اطلاعات نویسنده */}
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-gray-800">Ali Reza Mohammadi</h1>
                <span className="text-gray-500 text-sm">توسعه دهنده وب</span>
            </div>

            {/* معرفی کوتاه */}
            <div className="mt-4 text-gray-700 leading-relaxed text-sm">
                <p>
                    برنامه‌نویس و علاقه‌مند به فناوری‌های وب. تجربه‌ی چندین ساله در طراحی و توسعه‌ی نرم‌افزارهای تحت وب با استفاده از React و Node.js.
                </p>
            </div>

            {/* لیست مقالات */}
            <div className="mt-8 text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">مقالات منتشر شده</h2>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    {articles.length > 0 ? (
                        <ul className="space-y-2">
                            {articles.map(article => (
                                <li key={article.id} className="flex justify-between items-center border-b border-gray-300 pb-2">
                                    <Link href={article.link} className="text-blue-500 hover:underline">
                                        {article.title}
                                    </Link>
                                    <span className="text-sm text-gray-500">{article.date}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">هنوز مقاله‌ای منتشر نشده است.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
