import { search } from "@/app/lib/entity/paper";
import Link from "next/link";
import { FoldIcon, TimeIcon } from "../svgIcon/svgIcon";


interface SearchCard {
    searchList: search[]
}

export default function SearchCard({ searchList }: SearchCard) {
    return (
        <div className="w-full h-full my-8">
            {searchList.length !== 0 ? <>
                {
                    searchList.map((item, index) => {
                        return (
                            <div key={index} className="w-full h-28 my-4 rounded bg-origin-50">
                                <Link href={"/paper/" + item.type + "/" + item.uid}>
                                    <div className="w-full h-full text-[#989898]">
                                        <div className="flex items-center w-full pt-2 px-4 text-nowrap text-left">
                                            <div className="inline-block text-2xl w-3/5 truncate text-black">
                                                {item.title}
                                            </div>
                                            <div className="w-1/5 truncate relative flex-nowrap flex items-center">
                                                <FoldIcon className="mx-1" width="16px" />
                                                {item.type}
                                            </div>
                                            <div className="w-1/5 truncate relative flex-nowrap flex items-center">
                                                <TimeIcon className="mx-1" width="16px" />
                                                {item.date}
                                            </div>
                                        </div>
                                        <div className="max-w-[750px] break-words line-clamp-3 px-4 py-1 overflow-hidden text-black">
                                            {item.description}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </> : <>
                <div className="text-4xl text-center mt-16">loading...</div>
            </>
            }
        </div>
    )
}