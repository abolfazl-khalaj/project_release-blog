'use client'

import { useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import WritingBlog from '@/public/writing-blog.png';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(false);
    
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="w-3/5 m-auto min-h-40 text-center mt-20 p-4 shadow-lg flex justify-around items-center bg-white rounded-lg">
            <div>
                {
                    !isLogin && 
                    <span className="mb-10 text-xl">
                        با ثبت نام خود میتوانید در صفحه ما مقاله انتشار بدهید
                        <br/>
                         و مطالعه کنندگان پروفایل شمارا بازدید کنند ...
                    </span>
                }
                <div className="mt-8">
                    <Image src={WritingBlog} alt="Writing Blog" width={300} height={400} />
                </div>
            </div>
            <div className="w-2/5">
                <h2 className="text-lg font-semibold mb-3">{isLogin ? "ورود" : "ثبت نام"}</h2>
                <form className="flex flex-col gap-3">
                    {!isLogin && (
                        <>
                            <label className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                                <FaUser className="text-gray-500" />
                                <span className="text-gray-700">پروفایلتونو بذارید</span>
                                <input type="file" className="hidden" />
                            </label>
                            <input type="text" placeholder="نام کامل" className="p-2 border rounded-lg focus:ring-2 outline-blue-500" required />
                            <input type="text" placeholder="شغل" className="p-2 border rounded-lg focus:ring-2 outline-blue-500" required />
                        </>
                    )}
                    <input type="email" placeholder="ایمیل" className="p-2 border rounded-lg focus:ring-2 outline-blue-500" required />
                    <input type="password" placeholder="رمز عبور" className="p-2 border rounded-lg focus:ring-2 outline-blue-500" required />
                    {
                        !isLogin && 
                        <textarea placeholder="درباره خودتان" className="p-2 border rounded-lg focus:ring-2 outline-blue-500 resize-none min-h-20" required></textarea>
                    }
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                        {isLogin ? "ورود" : "ثبت نام"}
                    </button>
                </form>
                <button onClick={toggleForm} className="mt-3 text-sm text-gray-800 hover:underline">
                    {isLogin ? "حساب کاربری ندارید؟ ثبت نام کنید" : "حساب دارید؟ وارد شوید"}
                </button>
            </div>
        </div>
    );
}