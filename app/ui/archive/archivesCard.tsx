import { card } from "@/app/lib/entity/paper";
import Image from "next/image";
import Link from "next/link";
import { TimeIcon } from "../icons/icon";



interface archivesProps {
    value: card
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
                        quality={20}
                    />
                </div>
                <div className="h-[128px] w-full pl-8">
                    <div className="flex w-full">
                        <div className="w-[400px] truncate inline-block font-[500] group-hover:text-[#FE9600] transition-[color] duration-300">
                            {value.title}
                        </div>
                        <div className="flex-1 flex items-center justify-end text-[#989898]">
                            <TimeIcon className="w-5 h-5 mx-1" />
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