import TypeList from "@/app/ui/type/typeListServer";
import { Suspense } from "react";


export default function ArchivesHome() {
    return (
        <div className="w-full h-screen flex justify-center items-center pt-[56px] bg-slate-50">
            <div className="w-full md:w-[750px] min-h-3/4  flex flex-col justify-center items-center flex-wrap overflow-hidden">
                <div className="flex flex-wrap justify-center">
                    <Suspense fallback={<div>loading</div>}>
                        <TypeList />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}