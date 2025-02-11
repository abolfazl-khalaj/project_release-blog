import Link from "next/link";
import { useState } from "react";

interface ArticleResponse {
    id: number;
    title: string;
    date: string;
    link: string;
}
export default function ArticlesPanelUser(){

    
    const [articles, setArticles] = useState<ArticleResponse[] | undefined>([
            { id: 1, title: "راهنمای جامع دیزاین پترن‌ها", date: "1402/11/20", link: "/article/1" },
            { id: 2, title: "۱۰ نکته برای بهینه‌سازی کدهای React", date: "1402/10/15", link: "/article/2" },
            { id: 3, title: "چگونه یک پروژه فول استک راه‌اندازی کنیم؟", date: "1402/09/05", link: "/article/3" }
        ]);
    
    

    return (
        <div>
            <h2 className="text-xl font-bold">مدیریت مقالات</h2>
            <div className="mt-7">
                {articles ? (
                    <ul className="space-y-2">
                        {articles.map(article => (
                            <li key={article.id} className="flex justify-between items-center border-b border-gray-300 pb-2">
                                <Link href={article.link} className="text-blue-500 hover:underline">
                                    {article.title}
                                </Link>
                                <div className="flex gap-x-3">
                                    <span className="text-sm text-gray-500">{article.date}</span>
                                    <button className="py-1 px-2 rounded bg-red-600 text-white hover:bg-red-500 cursor-pointer">حذف</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">هنوز مقاله‌ای منتشر نشده است.</p>
                )}
            </div>
        </div>
    )
}