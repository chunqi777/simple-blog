import SearchPageServer from "@/app/ui/search/searchPageServer";

interface SearchPageProps {
    searchParams: {
        [key: string]: string;
    }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
    return (
        <div className="w-full h-full min-h-[calc(100vh-150px)]">
                <SearchPageServer query={searchParams} />

        </div>
    )
}