'use client'
import Link from "next/link";
import PanelAdminLayOut from "../layout";
import Article from "@/components/module/p-admin/Article";

export interface ArticleResponse {
    id: number;
    author: string;
    title: string;
    category: string;
    body: string;
    date: string;
    time: number ;
    keywords: string[];
    publishGoal: string;
}

export default function RequestsArticle() {
    const articles: ArticleResponse[] = [
        {
            id: 1,
            author: "محمد احمدی",
            title: "مقاله‌ای درباره تکنولوژی‌های نوین",
            category: "تکنولوژی",
            time: 23,
            body: "مقاله شامل توضیحات و تحلیل‌هایی در خصوص پیشرفت‌های تکنولوژیکی در سال‌های اخیر است...",
            date: "2025-02-10",
            keywords: ["هوش مصنوعی", "ماشین لرنینگ", "تکنولوژی", "رباتیک", "داده کاوی"],
            publishGoal: "آگاهی‌بخشی و آموزش",
        },
        {
            id: 2,
            author: "فاطمه معینی",
            title: "بررسی تحولات اقتصادی کشور",
            category: "اقتصاد",
            time: 23,
            body: "این مقاله به تحلیل و بررسی تحولات اقتصادی در دوران اخیر پرداخته است...",
            date: "2025-02-09",
            keywords: ["اقتصاد", "بازار", "سرمایه‌گذاری", "تورم", "رکود"],
            publishGoal: "اطلاع‌رسانی",
        },
    ];

    return (
            <div className="articles-container p-6 ">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">مدیریت مقالات</h1>
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr className="children:text-center">
                            <th className="px-4 py-2 text-left text-gray-600">نویسنده</th>
                            <th className="px-4 py-2 text-left text-gray-600">عنوان مقاله</th>
                            <th className="px-4 py-2 text-left text-gray-600">دسته‌بندی</th>
                            <th className="px-4 py-2 text-left text-gray-600">تاریخ</th>
                            <th className="px-4 py-2 text-left text-gray-600">کلمات کلیدی</th>
                            <th className="px-4 py-2 text-left text-gray-600"> زمان طول مطالعه</th>
                            <th className="px-4 py-2 text-left text-gray-600">هدف انتشار</th>
                            <th className="px-4 py-2 text-left text-gray-600">نمایش </th>
                            <th className="px-4 py-2 text-left text-gray-600">عملیات</th>             
                            <th className="px-4 py-2 text-left text-gray-600">عملیات</th>                            
                            <th className="px-4 py-2 text-left text-gray-600">عملیات</th>               
                            <th className="px-4 py-2 text-left text-gray-600">عملیات</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <Article 
                            key={article.id}
                            role='USER' 
                            article={article} 
                            deleteArticle={deleteArticle} 
                            editArticle={editArticle}/>
                        ))}
                    </tbody>
                </table>
            </div>
    );

    function editArticle(id: number) {
        console.log(`ویرایش مقاله با id: ${id}`);
        // منطق ویرایش مقاله
    }

    function deleteArticle(id: number) {
        console.log(`حذف مقاله با id: ${id}`);
        // منطق حذف مقاله
    }
}
