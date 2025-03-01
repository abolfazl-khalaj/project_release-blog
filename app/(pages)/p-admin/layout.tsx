import Aside from "@/components/template/p-admin/Aside";

export default function PanelAdminLayOut({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <aside className="w-1/5 bg-slate-400 p-5 h-full fixed">
                <Aside />
            </aside>

            <main className="flex-1 mr-[20%] p-4">
                {children}
            </main>
        </div>
    );
}
