'use client'

import { PlusIcon } from "@/app/ui/icons/icon"
import Table from "@/app/ui/table/table"


export default function Invoices() {
    return (
        <div className="w-full h-full px-8 py-6 pt-14 flex flex-col">
            <div className="block w-full h-14 relative">
                <div className="text-5xl absolute left-0 font-medium">Invoices</div>
                <button className="h-full absolute right-0 bg-[#FE9600] rounded-xl px-4 flex items-center justify-between text-[white] min-w-48 group">
                    <span>发表文章</span>
                    <PlusIcon className=" group-hover:rotate-180 transition-transform duration-700" width="26px"/>
                </button>
            </div>
            <div className="w-full h-full pt-2">
                <Table />
            </div>
        </div>
    )
}