
export default function ArchivesCardSkeleton() {
    return (
        <div className="relative">
            <div className="w-full h-48 mt-10 flex flex-row items-center group">
                <div className="relative min-w-32 h-32 rounded-[100%] overflow-hidden skeleton-loading"></div>
                <div className="h-[128px] w-full pl-8">
                    <div className="w-full h-6 skeleton-loading"></div>
                    <div className="w-[590px] mt-6">
                        <div className="w-full h-6 mb-1 skeleton-loading"></div>
                        <div className="w-full h-6 mb-1 skeleton-loading"></div>
                        <div className="w-full h-6 mb-1 skeleton-loading"></div>
                    </div>
                </div>
            </div>
            <hr className="w-1/2 border-solid border absolute -bottom-6 left-1/2 -translate-x-1/2" />
        </div>
    )
}