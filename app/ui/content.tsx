import clsx from "clsx"
import Card from "./card"

const images = [
    { name: "2", url: "/background/2.png" },
    { name: "3", url: "/background/3.png" },
    { name: "4", url: "/background/4.png" },
]

export default function Content() {


    return (
        <div className="flex h-[1000px] mx-auto">
            <div className="flex md:w-[750px] flex-col">
                <div className="flex pt-[75px] w-full flex-col">
                    <div className={clsx("w-full h-[30px] text-xl flex relative",
                        "after:w-full after:h-[1px] after:bg-black after:block after:absolute after:bottom-0"
                    )}>
                        <p className="absolute left-[16px]">title</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <>
                            {images.map((img, index) => {
                                return (
                                    <div className="w-[246px] h-[160px] block shadow-[1px_1px_3px_rgba(0,0,0,.3)] rounded-lg overflow-hidden">
                                        <img
                                            key={index}
                                            src={img.url}
                                            alt={img.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                )
                            })}
                        </>
                    </div>
                </div>
                <div className="bg-yellow-50 w-full mt-10 flex flex-col">
                    <div className={clsx("w-full h-[30px] text-xl flex relative",
                        "after:w-full after:h-[1px] after:bg-black after:block after:absolute after:bottom-0"
                    )}>
                        <p className="absolute left-[16px]">title</p>
                    </div>
                    <Card />
                </div>
            </div>
        </div>
    )
}