import { useState } from "react";

interface TicketResponse {
    id: number;
    title: string;
    messages: string[];
}
export default function TicketsPanelUser(){
    const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

        const [tickets, setTickets] = useState<TicketResponse[]>([
            { id: 1, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی مشخصات ورود خود را بررسی ورود خود را بررسی کنید."] },
            { id: 2, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 1342, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 23435, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 134534, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 2345353, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 13453564, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 56756752, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 12134, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 245, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 134542, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 234435, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 1345534, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 23453653, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
            { id: 134537564, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
            { id: 567569752, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
        ]);

    return (
        <div>
        <h2 className="text-xl font-bold mb-4">مدیریت تیکت</h2>
        <div className="flex border p-4 rounded-lg">
            <div className="w-1/4 border-l border-blue-400 p-2">
                {tickets.map(ticket => (
                    <button
                        key={ticket.id}
                        onClick={() => setSelectedTicket(ticket.id)}
                        className={`block w-full text-right py-2 px-4 mb-2 rounded-lg text-sm font-semibold transition ${
                            selectedTicket === ticket.id ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {ticket.title}
                    </button>
                ))}
            </div>
            <div className="w-3/4 p-4">
                {selectedTicket !== null ? (
                    <div>
                        <div className="space-y-3">
                            {tickets.find(ticket => ticket.id === selectedTicket)?.messages.map((msg, index) => (
                                <div className="flex justify-end" key={index} >
                                    <div className="p-2 bg-gray-100 rounded-lg w-1/2">{msg}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">یک تیکت را برای مشاهده انتخاب کنید.</p>
                )}
            </div>
        </div>
    </div>
    )
}