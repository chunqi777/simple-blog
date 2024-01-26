import { fetchPaperData } from "@/app/lib/data";
import MDPreview from "@/app/ui/markdownEditor/MDPreview";
import clsx from "clsx";
import Image from "next/image";

interface paperProps {
    params: {
        type: string,
        uid: string
    }
}

export default async function Paper({ params }: paperProps) {
    const paperValue = await fetchPaperData(params.type, params.uid);

    return (
        <div className="flex flex-col bg-slate-50">
            <div className={clsx("relative w-full h-[456px]", "before:z-10 before:w-full before:h-full before:bg-gradient-to-t before:from-black/45 before:to-transparent before:absolute before:top-0 before:left-0")}>
                <Image
                    src={paperValue.imgUrl}
                    alt={paperValue.imgName}
                    fill
                    priority
                    className="object-cover select-none z-0"
                    quality={25}
                />
                <div className="flex flex-col w-full max-w-[780px] h-[105px] z-20 absolute bottom-[20px] left-1/2 translate-x-[-50%] text-white font-bold">
                    <div className="text-4xl text-shadow-md">
                        {paperValue.title}
                    </div>
                    <div className="pt-[18px] text-[14px]">Creator · {paperValue.date} · {paperValue.view}次阅读</div>
                </div>
            </div>
            <div className="h-full min-h-[calc(100vh-456px)] w-full max-w-[800px] mx-auto">
                <div className="pt-10 h-full w-full">
                    <MDPreview content={paperValue.content} />
                </div>
            </div>
        </div>
    )
}