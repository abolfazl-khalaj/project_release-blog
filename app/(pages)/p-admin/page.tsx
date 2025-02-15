'use client';
import { useState, useEffect } from "react";

export default function DashboardHome() {
    const [stats, setStats] = useState({
        articles: 320,
        pendingArticles: 25,
        myArticles: 40,
        userArticles: 280,
        bannedUsers: 10,
        users: 500,
        tickets: 120,
        unansweredTickets: 15,
        unreadMessages: 7,
    });

    const supportTeam = [
        { id: 1, name: "محمد رضایی", role: "پشتیبان ارشد", email: "mohammad@example.com" },
        { id: 2, name: "سارا احمدی", role: "پشتیبان فنی", email: "sara@example.com" },
        { id: 3, name: "رضا نوری", role: "پشتیبان مشتریان", email: "reza@example.com" },
    ];

    return (
        <div className="w-11/12 min-h-96 bg-white shadow-lg mt-10 mx-auto p-4 rounded-lg">
            {/* عنوان صفحه */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">خانه پنل مدیریت</h2>

            {/* اطلاعات آماری */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard title="تعداد کل مقالات" count={stats.articles} color="blue" />
                <StatsCard title="مقالات نیاز به تأیید" count={stats.pendingArticles} color="yellow" />
                <StatsCard title="مقالات من" count={stats.myArticles} color="green" />
                <StatsCard title="مقالات کاربران" count={stats.userArticles} color="purple" />
                <StatsCard title="کاربران بن شده" count={stats.bannedUsers} color="red" />
                <StatsCard title="تعداد کاربران" count={stats.users} color="teal" />
                <StatsCard title="تعداد تیکت‌ها" count={stats.tickets} color="orange" />
                <StatsCard title="تیکت‌های بی‌پاسخ" count={stats.unansweredTickets} color="pink" />
                <StatsCard title="پیغام‌های دیده‌نشده" count={stats.unreadMessages} color="gray" />
            </div>
            <div className="mt-10 bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">تیم پشتیبانی</h3>
                <ul className="space-y-3">
                    {supportTeam.map((member) => (
                        <li key={member.id} className="flex justify-between items-center border-b pb-2">
                            <div>
                                <h4 className="text-lg font-semibold">{member.name}</h4>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                            <span className="text-sm text-gray-500">{member.email}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}



const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 border-blue-500",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-500",
    green: "bg-green-100 text-green-800 border-green-500",
    purple: "bg-purple-100 text-purple-800 border-purple-500",
    red: "bg-red-100 text-red-800 border-red-500",
    teal: "bg-teal-100 text-teal-800 border-teal-500",
    orange: "bg-orange-100 text-orange-800 border-orange-500",
    pink: "bg-pink-100 text-pink-800 border-pink-500",
    gray: "bg-gray-100 text-gray-800 border-gray-500",
};

export  function StatsCard({ title, count, color }: { title: string; count: number; color: string }) {
    return (
        <div className={`p-3 rounded-lg shadow-md border-l-8 ${colorClasses[color]}`}>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xl font-bold mt-1">{count}</p>
        </div>
    );
}
