'use client'

import Link from "next/link"
import { useLayoutEffect, useState } from "react"
import { ArchivesList, fetchArchivesList } from "../../lib/data"

export default function ArchivesHome() {

    const [data, setData] = useState<ArchivesList>([])


    useLayoutEffect(() => {
        const fetchData = async () => {
            const res = await fetchArchivesList()
            setData(res)
        }

        fetchData()
    }, [])

    return (
        <div className="w-full h-screen flex justify-center items-center pt-[56px] bg-slate-50">
            <div className="w-full md:w-[750px] min-h-3/4  flex flex-col justify-center items-center flex-wrap overflow-hidden">
                <div className="flex flex-wrap justify-center">
                    <>
                        {data.map((data, key) => {
                            return (
                                <Link href={"/archives/" + data} key={key} className="block text-center mx-4 my-2 px-3 py-[5px] bg-[#FE9600] rounded text-3xl hover:scale-[1.2] transition-all">
                                    <div>{data}</div>
                                </Link>
                            )
                        })}
                    </>
                </div>
            </div>
        </div>
    )
}