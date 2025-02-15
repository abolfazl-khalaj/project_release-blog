import { ArticleResponse } from "@/app/(pages)/p-admin/article/page";
import Link from "next/link";

interface ArticleProps {
    article: ArticleResponse;
    role: string
    deleteArticle: (id: number) => void;
    editArticle: (id: number) => void;
}

export default function ArticlePanelAdmin({ article, role, deleteArticle, editArticle }: ArticleProps){

    return (
        <tr key={article.id} className="border-b hover:bg-gray-50 text-center">
        <td className="px-4 py-2 text-gray-700">{article.author}</td>
        <td className="px-4 py-2 text-gray-700">{article.title}</td>
        <td className="px-4 py-2 text-gray-700">{article.category}</td>
        <td className="px-4 py-2 text-gray-700">{article.date}</td>
        <td className="px-4 py-2">
            <ul className="space-y-1">
                {article.keywords.map((keyword, index) => (
                    <li key={index} className="text-gray-600 text-sm">{keyword}</li>
                ))}
            </ul>
        </td>
        <td className="px-4 py-2 text-gray-700">{article.time} دقیقه </td>
        <td className="px-4 py-2 text-gray-700">{article.publishGoal}</td>
        <td className="px-4 py-2 text-gray-700">
            <Link href={`ard`} className="text-green-700">
                نمایش
            </Link>
        </td>
        <td className="px-4 py-2 text-gray-700">
            <button 
                onClick={() => editArticle(article.id)} 
                className="hover:bg-blue-600 mr-2 text-sm py-1 px-2 bg-blue-700 rounded text-white"
            >
                ویرایش
            </button>
        </td>
        <td>
            <button 
                onClick={() => deleteArticle(article.id)} 
                className="hover:bg-red-600 mr-2 text-sm py-1 px-2 bg-red-700 rounded text-white"
            >
                حذف
            </button>
        </td>
        {
            role === 'USER' && 
            (
            <>
                <td className="px-4 py-2 text-gray-700">
                    <button 
                        onClick={() => editArticle(article.id)} 
                        className="hover:bg-green-600 mr-2 text-sm py-1 px-2 bg-green-700 rounded text-white"
                    >
                        تایید
                    </button>
                </td>
                <td>
                    <button 
                        onClick={() => deleteArticle(article.id)} 
                        className="hover:bg-orange-600 mr-2 text-sm py-1 px-2 bg-orange-700 rounded text-white"
                    >
                        رد
                    </button>
                </td>
            </>
            )
        }
    </tr>
    )
}