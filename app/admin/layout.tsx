import Sidebar from "../ui/sidebar/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="block w-[calc(100%-256px)] min-w-[1000px] min-h-screen">
                {children}
            </div>
        </div>
    )
}