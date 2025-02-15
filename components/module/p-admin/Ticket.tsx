import { Ticket } from "@/app/(pages)/p-admin/ticket/page"

interface TicketProps{
    ticket: Ticket,
    openModal: (ticket: Ticket, type: 'view' | 'reply')=>void ,
    deleteTicket: (id: number)=>void,
    banUser: (email:string)=>void,
}

export default function TicketPanelAdmin({ticket ,openModal ,deleteTicket ,banUser}:TicketProps){

    return (
        <tr key={ticket.id} className="border-b hover:bg-gray-50 text-center">
        <td className="px-4 py-2 text-gray-700">{ticket.id}</td>
        <td className="px-4 py-2 text-gray-700">{ticket.name}</td>
        <td className="px-4 py-2 text-gray-700">{ticket.job}</td>
        <td className="px-4 py-2 text-gray-700">{ticket.email}</td>
        <td className="px-4 py-2 text-gray-700">{ticket.date}</td>
        <td className="px-4 py-2 text-gray-700">{ticket.department}</td>
        <td className="px-4 py-2 text-gray-700">{ticket.title}</td>
        <td className="px-4 py-2 text-gray-700">
            <button
                onClick={() => openModal(ticket, 'view')}
                className="text-blue-500 hover:text-blue-700 text-sm"
            >
                مشاهده تیکت
            </button>
        </td>
        <td className="px-4 py-2 text-gray-700">
            <button
                onClick={() => openModal(ticket, 'reply')}
                className="hover:bg-green-600 mr-2 text-sm py-1 px-2 bg-green-700 rounded text-white"
            >
                پاسخ
            </button>
        </td>
        <td>

            <button
                onClick={() => deleteTicket(ticket.id)}
                className="hover:bg-red-600 mr-2 text-sm py-1 px-2 bg-red-700 rounded text-white"
            >
                حذف
            </button>
        </td>

        <td>
            <button
                onClick={() => banUser(ticket.email)}
                className="hover:bg-gray-600 text-sm py-1 px-2 bg-gray-700 rounded text-white"
            >
                بن
            </button>
        </td>
    </tr>
    )
}