'use client'

import Table from "@/app/ui/table/table"


export default function Invoices() {
    return (
        <div className="w-full h-full px-8 py-6 pt-14 flex flex-col">
            <div className="block w-full h-14 relative">
                <div className="text-5xl absolute left-0 font-medium">Invoices</div>
                <button className="h-full absolute right-0 bg-[#FE9600] rounded-xl px-4 flex items-center justify-between text-[white] min-w-48">
                    <span>发表文章</span>
                    <i className="block w-5 h-5">
                        <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </i>
                </button>
            </div>
            <div className="w-full h-full mt-4">
                <Table />
            </div>
        </div>
    )
}