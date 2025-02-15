'use client';
import { useState } from "react";


export default function DashboardHome() {
    const [activeTab, setActiveTab] = useState("write");

    return (
        <div className="w-full min-h-screen bg-white shadow-lg mt-4 mx-auto p-3 rounded-lg">
            {/* تب‌ها */}
            <div className="flex border-b w-full mb-6">
                {[
                    { id: "write", title: "نوشتن مقاله" },
                    { id: "export", title: "خروجی مقالات" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 text-center text-lg font-semibold transition ${
                            activeTab === tab.id
                                ? "border-b-4 border-blue-500 text-blue-500"
                                : "text-gray-500 hover:text-blue-500"
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {activeTab === "write" &&                 
                <div>
                    نوشتن
                </div>    
            }
            {activeTab === "export" && 
                <div>
                    خروجی
                </div>    
            }
        </div>
    );
}
