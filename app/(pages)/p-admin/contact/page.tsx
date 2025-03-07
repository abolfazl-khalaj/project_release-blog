'use client'
import ContactPanelAdmin from '@/components/module/p-admin/Contact';
import ContactModel from '@/model/Contact';
import { useState } from 'react';
export interface Message {
    id: string;
    email?: string;
    title: string;
    description: string;
}

export default function Contact() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 'zx1', email: 'example1@example.com', title: 'پیغام اول', description: 'توضیحات پیغام اول' },
        { id: '2s', email: 'example2@example.com', title: 'پیغام دوم', description: 'توضیحات پیغام دوم' },
        { id: '3f', title: 'پیغام سوم', description: 'توضیحات پیغام سوم' },
    ]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);



    const openModal = (message: Message) => {
        setSelectedMessage(message);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const markAsRead = async (id: string) => {
    //   await ContactModel.findByIdAndDelete(id)
    console.log(id);
    
    };

    return (
        <div>
            <div className="p-6 ">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">دریافت پیغام‌ها</h1>
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-gray-200">
                        <tr className='text-center'>
                            <th className="px-4 py-2 text-gray-600">شماره</th>
                            <th className="px-4 py-2  text-gray-600">ایمیل</th>
                            <th className="px-4 py-2  text-gray-600">عنوان</th>
                            <th className="px-4 py-2  text-gray-600">توضیحات</th>
                            <th className="px-4 py-2  text-gray-600">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>

                        {messages.map((message) => (
                            <ContactPanelAdmin 
                            key={message.id}
                            message={message} 
                            markAsRead={markAsRead} 
                            openModal={openModal}/>
                        ))}
                        
                    </tbody>
                </table>
            </div>

            {isModalOpen && selectedMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">{selectedMessage.title}</h2>
                        <p className="text-gray-700">{selectedMessage.description}</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-blue-500 text-white py-1 px-4 rounded-lg"
                            >
                                بستن
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
