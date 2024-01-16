import Image from "next/image";
import Link from "next/link";
import { cardValue } from "../lib/data";

export default function Card({ value, index }: { value: cardValue, index: string }) {
    return (
        <Link href={"/paper/type/" + index} className="card_wrapper">
            <div className="card_img">
                <Image
                    src={value.imgUrl}
                    alt={value.imgName}
                    fill
                    className="w-full h-full object-cover rounded-[0_12px_12px_0] transition-all duration-[450ms]"
                    sizes="(max-width: 768px) 100vw, (max-width: 640px) 50vw, 33vw"
                />
            </div>
            <div className="card_content_wrapper">
                <div className="card_content w-[80%]">
                    <div className="date text-[#888] font-[12px] flex items-center">
                        <i className="icon_time w-[18px] h-[18px] mx-1 inline-block">
                            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                        </i>
                        {value.date}
                    </div>
                    <div className="title">
                        基于 AIDA64 和现代 web 技术的电脑性能监控页基于 AIDA64 和现代 web 技术的电脑性能监控页
                    </div>
                    <div className="meta flex flex-row justify-around text-[#888] text-[13px]">
                        <div className="flex items-center">
                            <i className="h-[18px] w-[18px] mx-1">
                                <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </i>
                            {index}
                        </div>
                        <div className="flex items-center">
                            <i className="h-[18px] w-[18px] mx-1">
                                <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>
                            </i>
                            {value.type}
                        </div>
                    </div>
                    <div className="content my-4 text-[#666] text-[15px]">
                        <p>
                            基于 AIDA64 和现代 web 技术的电脑性能监控页基于 AIDA64 和现代 web 技术的电脑性能监控页基于 AIDA64 和现代 web 技术的电脑性能监控页基于 AIDA64 和现代 web 技术的电脑性能监控页
                        </p>
                    </div>
                </div>
            </div>
        </Link>

    )
}