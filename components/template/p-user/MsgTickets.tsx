import { useState } from "react";

interface TicketResponse {
  id: number;
  title: string;
  messages: string[];
}

export default function TicketsPanelUser() {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState<string>("");

  const [tickets, setTickets] = useState<TicketResponse[]>([
    { id: 1, title: "مشکل در ورود به سیستم", messages: ["سلام، نمی‌توانم وارد سیستم شوم.", "لطفاً مشخصات ورود خود را بررسی کنید."] },
    { id: 2, title: "سوال درباره پرداخت", messages: ["پرداخت من ناموفق بود.", "لطفاً مشخصات تراکنش خود را ارسال کنید."] },
  ]);

  // ارسال پیام جدید به تیکت انتخاب‌شده
  const sendMessage = () => {
    if (!messageInput.trim() || selectedTicket === null) return;

    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === selectedTicket
          ? { ...ticket, messages: [...ticket.messages, messageInput] }
          : ticket
      )
    );
    setMessageInput(""); // پاک کردن فیلد ورودی
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">مدیریت تیکت</h2>
      <div className="flex border p-4 rounded-lg">
        {/* لیست تیکت‌ها */}
        <div className="w-1/4 border-l border-blue-400 p-2">
          {tickets.map((ticket) => (
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

        {/* بخش نمایش پیام‌ها */}
        <div className="w-3/4 p-4 flex flex-col">
          {selectedTicket !== null ? (
            <>
              <div className="space-y-3 flex-grow overflow-y-auto max-h-60 border p-2 rounded-lg">
                {tickets.find((ticket) => ticket.id === selectedTicket)?.messages.map((msg, index) => (
                  <div className="flex justify-end" key={index}>
                    <div className="p-2 bg-gray-100 rounded-lg w-1/2">{msg}</div>
                  </div>
                ))}
              </div>

              {/* بخش ارسال پیام */}
              <div className="mt-4 flex">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="border p-2 flex-grow rounded"
                  placeholder="پیام خود را بنویسید..."
                />
                <button
                  onClick={sendMessage}
                  className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
                >
                  ارسال
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500">یک تیکت را برای مشاهده انتخاب کنید.</p>
          )}
        </div>
      </div>
    </div>
  );
}
