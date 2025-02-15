'use client'
import TicketPanelAdmin from '@/components/module/p-admin/Ticket';
import { useState } from 'react';

export interface Ticket {
    id: number;
    name: string;
    job: string;
    email: string;
    department: string;
    title: string;
    description: string;
    date: string
}

export default function TicketsList() {
    const [tickets, setTickets] = useState<Ticket[]>([
        {
            id: 1,
            name: 'علی رضایی',
            job: 'پشتیبان فنی',
            email: 'ali@example.com',
            date: '1500/4/6',
            department: 'فنی',
            title: 'مشکل در ورود به سیستم',
            description: 'من نمی‌توانم وارد حساب کاربری خود شوم. لطفاً راهنمایی کنید.'
        },
        {
            id: 2,
            name: 'زهرا محمدی',
            job: 'مدیر مالی',
            date: '1500/4/6',
            email: 'zahra@example.com',
            department: 'مالی',
            title: 'مشکل در پرداخت آنلاین',
            description: 'پرداخت ا مبلغ از حساب کم شدهاما مبلغ از حساب کم شده است.'
        }
    ]);

    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<'view' | 'reply' | null>(null);
    const [replyMessage, setReplyMessage] = useState<string>('');

    const openModal = (ticket: Ticket, type: 'view' | 'reply') => {
        setSelectedTicket(ticket);
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setReplyMessage('');
    };

    const deleteTicket = (id: number) => {
        setTickets(tickets.filter(ticket => ticket.id !== id));
    };

    const banUser = (email: string) => {
        console.log(`کاربر با ایمیل ${email} بن شد`);
        // منطق بن کاربر اینجا اضافه شود
    };

    const sendReply = () => {
        console.log(`پاسخ به تیکت: ${replyMessage}`);
        closeModal();
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">لیست تیکت‌ها</h1>
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-200">
                    <tr className='text-center'>
                        <th className="px-4 py-2 text-gray-600">آیدی</th>
                        <th className="px-4 py-2 text-gray-600">نام</th>
                        <th className="px-4 py-2 text-gray-600">شغل</th>
                        <th className="px-4 py-2 text-gray-600">ایمیل</th>
                        <th className="px-4 py-2 text-gray-600">تاریخ</th>
                        <th className="px-4 py-2 text-gray-600">دپارتمان</th>
                        <th className="px-4 py-2 text-gray-600">عنوان</th>
                        <th className="px-4 py-2 text-gray-600">مشاهده</th>
                        <th className="px-4 py-2 text-gray-600">عملیات</th>
                        <th className="px-4 py-2 text-gray-600">عملیات</th>
                        <th className="px-4 py-2 text-gray-600">عملیات</th>

                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <TicketPanelAdmin
                        key={ticket.id}
                        ticket={ticket}
                        openModal={openModal}
                        deleteTicket={deleteTicket}
                        banUser={banUser}
                        />
                    ))}
                </tbody>
            </table>

            {/* مدال مشاهده تیکت */}
            {isModalOpen && selectedTicket && modalType === 'view' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-10/12">
                        <h2 className="text-xl font-semibold mb-4">توضیحات تیکت</h2>
                        <p className="text-gray-700">{selectedTicket.description}</p>
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

            {/* مدال پاسخ به تیکت */}
            {isModalOpen && selectedTicket && modalType === 'reply' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">پاسخ به تیکت</h2>
                        <textarea
                            className="w-full p-2 border rounded-lg"
                            rows={4}
                            placeholder="متن پاسخ را وارد کنید..."
                            value={replyMessage}
                            onChange={(e) => setReplyMessage(e.target.value)}
                        ></textarea>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={sendReply}
                                className="bg-green-500 text-white py-1 px-4 rounded-lg"
                            >
                                ارسال پاسخ
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 text-white py-1 px-4 rounded-lg"
                            >
                                لغو
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
