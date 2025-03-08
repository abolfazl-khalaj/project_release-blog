'use client'
import { useState } from "react";
import { BiPlusCircle, BiTrash } from "react-icons/bi";



export default function CategoryTicketPanelAdmin(){

    const [categories, setCategories] = useState<string[]>(["تکنولوژی", "اقتصاد", "سلامت", "فرهنگ"]);
    const [newCategory, setNewCategory] = useState("");

    const addCategory = () => {
        if (newCategory.trim() !== "" && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory("");
        }
    };

    const removeCategory = (category: string) => {
        setCategories(categories.filter(c => c !== category));
    };

    return (
        <div>
        <h2 className="text-xl font-bold">مدیریت دسته‌بندی تیکت ها</h2>
        <div className="p-6 bg-white rounded-lg shadow-md mt-4">
            <div className="flex gap-2 mb-4">
                <input 
                    type="text" 
                    placeholder="عنوان دسته‌بندی جدید..." 
                    value={newCategory} 
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="flex-1 p-2 border rounded"
                />
                <button onClick={addCategory} className="bg-blue-500 text-white px-4 py-2 flex items-center gap-1 rounded">
                    <BiPlusCircle size={18} /> اضافه کردن
                </button>
            </div>
            <ul className="divide-y divide-gray-200">
                {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded mb-2">
                        <span className="text-gray-800">{category}</span>
                        <button 
                            onClick={() => removeCategory(category)}
                            className="text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                            <BiTrash size={18} /> حذف
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>

    )
}