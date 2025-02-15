import { User } from "@/app/(pages)/p-admin/user/page"

interface UserProps {
    user: User ,
    openModal:(user:User,type:'about'|'articles')=>void ,
    resetUser:(id:number)=>void ,
    banUser:(id:number)=>void ,
}

export default function UserPanelAdmin({user, openModal,resetUser ,banUser}:UserProps){

    return (
        <tr key={user.id} className="border-b hover:bg-gray-50 text-center">
            <td className="px-4 py-2 text-gray-700">
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mx-auto" />
            </td>
            <td className="px-4 py-2 text-gray-700">{user.name}</td>
            <td className="px-4 py-2 text-gray-700">{user.job}</td>
            <td className="px-4 py-2 text-gray-700">{user.email}</td>
            <td className="px-4 py-2 text-gray-700">{user.role}</td>
            <td className="px-4 py-2 text-gray-700">
                <button
                    onClick={() => openModal(user, 'articles')}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                >
                    مشاهده ({user.articleCount})
                </button>
            </td>
            <td className="px-4 py-2 text-gray-700">
                <button
                    onClick={() => openModal(user, 'about')}
                    className="text-green-500 hover:text-green-700 text-sm"
                >
                    مشاهده
                </button>
            </td>
            <td className="px-4 py-2 text-gray-700">
                <button
                    onClick={() => resetUser(user.id)}
                    className="hover:bg-red-600 mr-2 text-sm py-1 px-2 bg-red-700 rounded text-white"
                >
                    ریست
                </button>
            </td>
            <td className="px-4 py-2 text-gray-700">
                <button
                    onClick={() => banUser(user.id)}
                    className="hover:bg-red-800 mr-2 text-sm py-1 px-2 bg-red-900 rounded text-white"
                >
                    بن
                </button>
            </td>
        </tr>
    )
}