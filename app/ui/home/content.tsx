/* eslint-disable @next/next/no-img-element */

'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import CardGroup from "./cards/cardGroup";


const images = [
    { name: "2", url: "/background/2.png" },
    { name: "3", url: "/background/3.png" },
    { name: "4", url: "/background/4.png" },
]


export default function Content() {
    const [groupNum, setGroupNum] = useState<number>(1);
    const groupNumRef = useRef(groupNum);


    const handleClick = () => {
        setGroupNum(groupNum + 1);
        groupNumRef.current = groupNum + 1;
    }

    useLayoutEffect(() => {
        const savedGroupNum = parseInt(localStorage.getItem('groupNum') || '1');
        setGroupNum(savedGroupNum);
        groupNumRef.current = savedGroupNum;


        return () => {
            localStorage.setItem('groupNum', groupNumRef.current.toString());
        };
    }, [])
    return (
        <div className="flex h-full mx-auto">
            <div className="flex md:w-[750px] flex-col">
                <div className="flex pt-[75px] w-full flex-col">
                    <div className={clsx("w-full h-[30px] text-xl flex relative mb-12 flex-row items-center text-[#666]",
                        "after:w-full after:h-[1px] after:absolute after:bottom-0 after:border-dotted after:border"
                    )}>
                        <i className="w-[18px] h-[18px] mx-1">
                            <svg data-slot="icon" fill="none" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                            </svg>
                        </i>
                        <p className="font-[QuicksandBold]">Latest Update</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <>
                            {images.map((img, index) => {
                                return (
                                    <Link href={"/"} key={index} className={clsx("w-[246px] h-[160px] relative block shadow-[1px_1px_3px_rgba(0,0,0,.3)] rounded-lg overflow-hidden group")}>
                                        <Image
                                            src={img.url}
                                            alt={img.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                            className="object-cover hover:scale-[1.2]  transition-all duration-[450ms] group-focus:scale-[1.2]"
                                        />
                                    </Link>
                                )
                            })}
                        </>
                    </div>
                </div>
                <div className="w-full mt-10 flex flex-col mb-12">
                    <div className={clsx("w-full h-[30px] text-xl flex relative mb-12 flex-row items-center text-[#666]",
                        "after:w-full after:h-[1px] after:absolute after:bottom-0 after:border-dotted after:border"
                    )}>
                        <i className="w-[18px] h-[18px] mx-1">
                            <svg data-slot="icon" fill="none" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </i>
                        <p className="font-[QuicksandBold]">Discovery</p>
                    </div>
                    <>
                        {[...Array(groupNum)].map((_, index) => {
                            return (

                                <CardGroup key={index} currentNum={index} />

                            )
                        })}
                    </>
                </div>
                <button onClick={handleClick}>load</button>
            </div>
        </div>
    )
}