'use client'
import UserPanelAdmin from '@/components/module/p-admin/User';
import UserModel from '@/model/User';
import { useState } from 'react';

export interface User {
    id: string;
    avatar: string;
    name: string;
    job: string;
    email: string;
    about: string;
    role: string;
    articleCount: number;
    articles: string[];
}

export default function UsersList() {
    const [users, setUsers] = useState<User[]>([
        {
            id: '1',
            avatar: 'https://via.placeholder.com/50',
            name: 'علی رضایی',
            job: 'نویسنده',
            email: 'ali@example.com',
            about: 'من علی هستم و عاشق نویسندگی در حوزه فناوری هستم.',
            role: 'ادمین',
            articleCount: 5,
            articles: ['مقاله 1', 'مقاله 2', 'مقاله 3', 'مقاله 4', 'مقاله 5']
        },
        {
            id: '2',
            avatar: 'https://via.placeholder.com/50',
            name: 'زهرا محمدی',
            job: 'روزنامه‌نگار',
            email: 'zahra@example.com',
            about: 'روزنامه‌نگار با 10 سال تجربه در حوزه خبرهای بین‌المللی.',
            role: 'نویسنده',
            articleCount: 3,
            articles: ['مقاله 6', 'مقاله 7', 'مقاله 8']
        }
    ]);

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [modalType, setModalType] = useState<'about' | 'articles' | null>(null);

    const openModal = (user: User, type: 'about' | 'articles') => {
        setSelectedUser(user);
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    const resetUser = async (id: string) => {
        console.log(id);
        
    };

    const banUser = (id: string) => {
         
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">لیست کاربران</h1>
            <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-200">
                    <tr className='text-center'>
                        <th className="px-4 py-2 text-gray-600">عکس</th>
                        <th className="px-4 py-2 text-gray-600">نام</th>
                        <th className="px-4 py-2 text-gray-600">شغل</th>
                        <th className="px-4 py-2 text-gray-600">ایمیل</th>
                        <th className="px-4 py-2 text-gray-600">نقش</th>
                        <th className="px-4 py-2 text-gray-600">مقالات</th>
                        <th className="px-4 py-2 text-gray-600">درباره من</th>
                        <th className="px-4 py-2 text-gray-600">عملیات</th>                        
                        <th className="px-4 py-2 text-gray-600">عملیات</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserPanelAdmin
                        key={user.id}
                        user={user}
                        openModal={openModal}
                        resetUser={resetUser}
                        banUser={banUser}
                        />
                    ))}
                </tbody>
            </table>

            {/* مدال نمایش جزئیات */}
            {modalType && selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        {modalType === 'about' ? (
                            <>
                                <h2 className="text-xl font-semibold mb-4">درباره {selectedUser.name}</h2>
                                <p className="text-gray-700">{selectedUser.about}</p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl font-semibold mb-4">مقالات منتشر شده توسط {selectedUser.name}</h2>
                                <ul className="list-disc list-inside text-gray-700">
                                    {selectedUser.articles.map((article, index) => (
                                        <li key={index}>{article}</li>
                                    ))}
                                </ul>
                            </>
                        )}
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
