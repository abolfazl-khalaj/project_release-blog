'use client'
import UpdateDataMePanelUser from "@/components/template/p-user/DataMe";
import UpdateDataMe from "@/components/template/p-user/DataMe";
import ArticlesPanelUser from "@/components/template/p-user/ListArticles";
import TicketsPanelUser from "@/components/template/p-user/MsgTickets";
import SendTicketPanelUser from "@/components/template/p-user/NewTicket";
import Link from "next/link";
import { useState } from "react";





export default function MyAccount() {
    const [activeTab, setActiveTab] = useState<string>("articles");


    const [tabs, setTabs] = useState([
        { id: 1, url: 'articles', title: 'مقالات' },
        { id: 2, url: 'tickets', title: 'تیکت ها' },
        { id: 3, url: 'profile', title: 'اطلاعات من' },
        { id: 4, url: 'newTicket', title: 'ارسال تیکت' },
        { id: 5, url: 'newArticle', title: 'ساخت مقاله' },
    ]);

    return (
        <div className="w-11/12 min-h-96 bg-white shadow-lg my-10 mx-auto p-6 rounded-lg">
            <div className="mb-6 text-2xl ">
                <span>
                    ابوالفضل جان به پنل کاربر بلاگ خوش اومدی ❤️
                </span>
            </div>
            <div className="flex border-b w-1/3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.url)}
                        className={`flex-1 py-2 text-center text-lg font-semibold transition ${
                            activeTab === tab.url
                                ? "border-b-4 border-blue-500 text-blue-500"
                                : "text-gray-500 hover:text-blue-500"
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div className="mt-6">
                {activeTab === "articles" && (
                    <ArticlesPanelUser/>
                )}

                {activeTab === "tickets" && (
                    <TicketsPanelUser/>
                )}

                {activeTab === "profile" && (
                    <UpdateDataMePanelUser/>
                )}

                {activeTab === "newTicket" && (
                    <SendTicketPanelUser/>
                )}

                {activeTab === "newArticle" && (
                    <div>
                        <h2 className="text-xl font-bold">ساخت مقاله</h2>
                        <p className="text-gray-600 mt-2">در این بخش می‌توانید مقاله جدید ایجاد کنید.</p>
                    </div>
                )}
            </div>
        </div>
    );
}