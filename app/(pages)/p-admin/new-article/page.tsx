'use client';
import EditorText from "@/components/template/Editor";
import { useState } from "react";


export default function DashboardHome() {
    const [activeTab, setActiveTab] = useState("write");

    return (
        <div className="w-full min-h-screen bg-white shadow-lg mt-4 mx-auto p-3 rounded-lg">
                <EditorText/>  
                <div>
                    <button className="text-2xl text-white w-full text-center bg-blue-500 rounded ">
                        ثبت 
                    </button>
                </div>  
        </div>
    );
}
