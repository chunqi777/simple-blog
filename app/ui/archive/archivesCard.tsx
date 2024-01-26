import Image from "next/image";
import Link from "next/link";
import { cardValue } from "../../lib/data";


interface archivesProps {
    value: cardValue
}

export default function ArchivesCard({ value }: archivesProps) {

    return (
        <div className="relative">
            <Link href={"/paper/" + value.type + "/" + value.uid} className="w-full h-48 mt-10 flex flex-row items-center group">
                <div className="relative min-w-32 h-32 rounded-[100%] overflow-hidden">
                    <Image
                        src={value.imgUrl}
                        alt={value.imgName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 640px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
                <div className="h-[128px] w-full pl-8">
                    <div className="flex w-full">
                        <div className="w-[400px] truncate inline-block font-[500] group-hover:text-[#FE9600] transition-[color] duration-300">
                            {value.title}
                        </div>
                        <div className="flex-1 flex items-center justify-end text-[#989898]">
                            <i className="w-5 h-5 mx-1">
                                <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                            </i>
                            {value.date}
                        </div>
                    </div>
                    <div className="w-[590px] truncate line-clamp-3 text-wrap mt-8 text-[rgba(0,0,0,0.66)]">
                        {value.description}
                    </div>
                </div>
            </Link>
            <hr className="w-1/2 border-solid border absolute -bottom-6 left-1/2 -translate-x-1/2" />
        </div>
    )
}