import Aside from "@/components/template/p-admin/Aside";
import Link from "next/link";

export default function PanelAdminLayOut({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="fr" dir="rtl">
        <body>
          <div className="flex">
            <aside className="w-1/4 bg-gray-200 p-4 min-h-screen">
                <Aside/>
            </aside>
  
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </body>
      </html>
    );
  }
  