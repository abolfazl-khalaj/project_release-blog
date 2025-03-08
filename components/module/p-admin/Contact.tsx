import { Message } from "@/app/(pages)/p-admin/contact/page"

interface ContactProps {
    message: Message
    markAsRead: (id:string)=> void,
    openModal: (message:Message)=> void,
}

export default function ContactPanelAdmin({message , markAsRead , openModal}:ContactProps){

    return(
        <tr key={message.id} className="border-b hover:bg-gray-50 text-center">
            <td className="px-4 py-2 text-gray-700">{message.id}</td>
            <td className="px-4 py-2 text-gray-700">{!message.email ? 'ایمیل ندارد':message.email}</td>
            <td className="px-4 py-2 text-gray-700">{message.title}</td>
            <td className="px-4 py-2 text-gray-700">
                <button
                    onClick={() => openModal(message)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                >
                    مشاهده توضیحات
                </button>
            </td>

            <td>
                <button
                    onClick={() => markAsRead(message.id)}
                    className="hover:bg-green-600 mr-2 text-sm py-1 px-2 bg-green-700 rounded text-white"
                >
                    دیدم
                </button>
            </td>
        </tr>
    )
}