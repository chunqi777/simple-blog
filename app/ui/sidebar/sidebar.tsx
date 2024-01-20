import SideLinks from "./sideLinks"


const sidebarList = [
    { name: 'Home', icon: 'home', link: '/admin' },
    { name: 'Home', icon: 'home', link: '/admin' },
    { name: 'Home', icon: 'home', link: '/admin' },
]

export default function Sidebar() {

    return (
        <div className="block min-w-[256px] min-h-[700px] h-screen text-xl font-semibold">
            <div className="w-full h-full flex flex-col py-2 px-2">
                <div className="w-full h-44 bg-[#FE9600] rounded-xl relative">
                    <div className="text-4xl absolute bottom-2 left-1/2 -translate-x-1/2">LOGO</div>
                </div>
                <SideLinks />
            </div>
        </div>
    )
}