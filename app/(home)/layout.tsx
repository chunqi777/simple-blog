import Navbar from "../ui/home/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className='fixed top-0 z-[9999] left-0 w-full'>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}