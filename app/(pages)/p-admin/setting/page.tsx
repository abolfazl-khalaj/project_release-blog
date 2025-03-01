'use client'

import DataEditFromPanelAdmin from "@/components/template/p-admin/setting/DataEditForm";

import { useState } from "react";

export default function Setting() {
    const [activeMainTab, setActiveMainTab] = useState("details")
    const [activeSubTab, setActiveSubTab] = useState("title");
    const [activeContactTab, setActiveContactTab] = useState("intro");

    return (
        <div className="w-11/12 min-h-96 bg-white shadow-lg mt-10 mx-auto p-6 rounded-lg">
            {/* تب‌های اصلی */}
            <div className="flex border-b w-1/2">
                {[
                    { id: "details", title: "جزئیات صفحه اصلی" },
                    { id: "rules", title: "قوانین" },
                    { id: "contact", title: "ارتباط با ما" },
                    { id: "notification", title: " نوتفیکیشن به کاربران" },
                    { id: "category", title: " دسته بندی" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveMainTab(tab.id)}
                        className={`flex-1 py-1 text-center font-semibold transition ${
                            activeMainTab === tab.id
                                ? "border-b-4 border-blue-500 text-blue-500"
                                : "text-gray-500 hover:text-blue-500"
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* محتوای تب‌ها */}
            <div className="mt-6">
                {/* جزئیات صفحه اصلی */}
                {activeMainTab === "details" && (
                    <div>
                        <h2 className="text-xl font-bold">جزئیات صفحه اصلی</h2>
                        {/* تب‌های داخلی جزئیات صفحه اصلی */}
                        <div className="flex border-b mt-4">
                            {[
                                { id: "title", title: "عنوان صفحه ما" },
                                { id: "description", title: "توضیحات صفحه ما" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveSubTab(tab.id)}
                                    className={`flex-1 py-2 text-center text-lg font-semibold transition ${
                                        activeSubTab === tab.id
                                            ? "border-b-4 border-green-500 text-green-500"
                                            : "text-gray-500 hover:text-green-500"
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        <div className="mt-4">
                            {activeSubTab === "title" && 
                                <DataEditFromPanelAdmin 
                                    data="این عنوان پیش‌فرض صفحه ما است. شما می‌توانید آن را تغییر دهید."
                                    placeholder={'عنوان جدید صفحه را اینجا وارد کنید'}/>
                            }
                            {activeSubTab === "description" && 
                                <DataEditFromPanelAdmin 
                                    data="این توضیحات پیش‌فرض صفحه ما است. شما می‌توانید آن را تغییر دهید."
                                    placeholder={'توضیحات جدید صفحه را اینجا وارد کنید'}/>
                            }
                        </div>
                    </div>
                )}

                {/* قوانین */}
                {activeMainTab === "rules" && (
                    <div>
                        <h2 className="text-xl font-bold">قوانین</h2>
                        <p className="mt-2 text-gray-600">اینجا می‌توانید قوانین را ویرایش کنید.</p>
                    </div>
                )}

                {/* ارتباط با ما */}
                {activeMainTab === "contact" && (
                    <div>
                        <h2 className="text-xl font-bold">ارتباط با ما</h2>
                        {/* تب‌های داخلی ارتباط با ما */}
                        <div className="flex border-b mt-4">
                            {[
                                { id: "intro", title: "معرفی" },
                                { id: "desc", title: "توضیحات" },
                                { id: "phone", title: "شماره تلفن" },
                                { id: "email", title: "ایمیل" },
                                { id: "address", title: "آدرس" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveContactTab(tab.id)}
                                    className={`flex-1 py-2 text-center text-lg font-semibold transition ${
                                        activeContactTab === tab.id
                                            ? "border-b-4 border-red-500 text-red-500"
                                            : "text-gray-500 hover:text-red-500"
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {/* محتوای تب‌های داخلی ارتباط با ما */}
                        <div className="mt-4">
                            {activeContactTab === "intro" && 
                                <DataEditFromPanelAdmin 
                                data="این توضیحات پیش‌فرض صفحه ما است. شما می‌توانید آن را تغییر دهید."
                                placeholder={'توضیحات جدید صفحه را اینجا وارد کنید'}/>
                            }
                            {activeContactTab === "desc" && 
                                <DataEditFromPanelAdmin 
                                    data="این توضیحات پیش‌فرض صفحه ما است. شما می‌توانید آن را تغییر دهید."
                                    placeholder={'توضیحات جدید صفحه را اینجا وارد کنید'}/>
                            }
                            {activeContactTab === "phone" && 
                                <DataEditFromPanelAdmin 
                                    data="09148762345"
                                    placeholder={'شماره جدید صفحه را اینجا وارد کنید'}/>
                            }
                            {activeContactTab === "email" && 
                                <DataEditFromPanelAdmin 
                                    data="abolfazl.kjaskj@gmail.com"
                                    placeholder={'ایمیل جدید صفحه را اینجا وارد کنید'}/>
                            }
                            {activeContactTab === "address" &&                                 <DataEditFromPanelAdmin 
                                data="خیابان امام"
                                placeholder={'ادرس جدید صفحه را اینجا وارد کنید'}/>
                            }
                        </div>
                    </div>
                )}

                {activeMainTab === "category" && (
                    <div>
                        <h2 className="text-xl font-bold">ارتباط با ما</h2>
                        {/* تب‌های داخلی ارتباط با ما */}
                        <div className="flex border-b mt-4">
                            {[
                                { id: "categories-ticket", title: "دسته های تیکت" },
                                { id: "categories-blog", title: "دسته های مقاله" },

                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveSubTab(tab.id)}
                                    className={`flex-1 py-2 text-center text-lg font-semibold transition ${
                                        activeSubTab === tab.id
                                            ? "border-b-4 border-red-500 text-red-500"
                                            : "text-gray-500 hover:text-red-500"
                                    }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4">
                        {activeSubTab === "categories-ticket" &&                                 
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus accusamus autem necessitatibus velit alias? Explicabo amet excepturi sit eligendi, labore obcaecati quis soluta nemo veritatis illum cumque tempora fugit nihil!
                        </div>
                        }
                        {activeSubTab === "categories-blog" && 
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi nisi reiciendis dolorem laudantium voluptas porro facere harum. Facilis vel libero omnis maiores quo dolores porro tenetur quam eveniet dignissimos?
                            </div>
                        }
                        </div>
                    </div>
                )}

                {activeMainTab === "notification" && (
                    <div>
                        <h2 className="text-xl font-bold">نوتیفیکیشن</h2>
                        <p className="mt-2 text-gray-600">اینجا می‌توانید قوانین را ویرایش کنید.</p>
                    </div>
                )}

                
            </div>
        </div>
    );
}
