import Navbar from "../ui/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" bg-slate-50">
            <div className='fixed top-0 z-[9999] left-0 w-full'>
                <Navbar />
            </div>
            {children}
            <footer className="w-full h-[150px]">
                <div className="mx-auto w-full md:w-[750px] h-full text-center flex items-center justify-center">
                    <span>Crafted with  by chunqi777</span>
                </div>
            </footer>
        </div>
    )
}