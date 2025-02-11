import { useState } from "react";


export default function SendTicketPanelUser(){


    const [ticketData, setTicketData] = useState({
        title: "",
        description: "",
        department: ""
    });

    const [departments] = useState(["پشتیبانی فنی", "مالی", "مدیریت حساب", "عمومی"]);


    return (
        <div>
        <h2 className="text-xl font-bold">ارسال تیکت</h2>
        <div className="mt-4 space-y-4">
            <select value={ticketData.department} onChange={(e) => setTicketData({...ticketData, department: e.target.value})} className="w-full p-2 border rounded">
                <option value="">انتخاب دپارتمان</option>
                {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                ))}
            </select>
            <input type="text" placeholder="عنوان تیکت" value={ticketData.title} onChange={(e) => setTicketData({...ticketData, title: e.target.value})} className="w-full p-2 border rounded outline-blue-500" />
            <textarea placeholder="توضیحات تیکت" value={ticketData.description} onChange={(e) => setTicketData({...ticketData, description: e.target.value})} className="w-full p-2 border rounded min-h-40 outline-blue-500"></textarea>

            <button className="w-full bg-blue-500 text-white py-2 rounded">ارسال تیکت</button>
        </div>
    </div>
    )
}