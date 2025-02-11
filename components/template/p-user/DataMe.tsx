import { useState } from "react";
import { FaUser } from "react-icons/fa";


export default function UpdateDataMePanelUser(){
    const [userData, setUserData] = useState({
        profileImage: "",
        fullName: "",
        job: "",
        email: "",
        about: "",
        password: "",
        beforePassword: ''
    });
    return (
        <div>
            <h2 className="text-xl font-bold">اطلاعات من</h2>
            <div className="mt-4 space-y-4">
                <label className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <FaUser className="text-gray-500" />
                    <span className="text-gray-700">پروفایلتونو بذارید</span>
                    <input type="file" className="hidden" />
                </label>

                <input type="text" placeholder="نام کامل" value={userData.fullName} onChange={(e) => setUserData({...userData, fullName: e.target.value})} className="w-full p-2 border rounded outline-blue-500" />

                <input type="text" placeholder="شغل" value={userData.job} onChange={(e) => setUserData({...userData, job: e.target.value})} className="w-full p-2 border rounded outline-blue-500" />

                <input type="email" placeholder="ایمیل" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} className="w-full p-2 border rounded outline-blue-500" />

                <textarea placeholder="درباره خودتان" value={userData.about} onChange={(e) => setUserData({...userData, about: e.target.value})} className="w-full p-2 border rounded outline-blue-500"></textarea>

                <input type="password" placeholder="رمز عبور قبل" value={userData.password} onChange={(e) => setUserData({...userData, beforePassword: e.target.value})} className="w-full p-2 border rounded outline-blue-500" />

                <input type="password" placeholder="رمز عبور" value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} className="w-full p-2 border rounded outline-blue-500" />

                <button className="w-full bg-blue-500 text-white py-2 rounded">
                    ذخیره تغییرات
                </button>
            </div>
        </div>
    )
}