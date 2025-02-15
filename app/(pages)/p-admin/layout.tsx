import Aside from "@/components/template/p-admin/Aside";
import Link from "next/link";

export default function PanelAdminLayOut({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (

          <div className="flex">
            <aside className="w-1/6 bg-gray-200 p-4">
                <Aside/>
            </aside>
  
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>

    );
  }
  