import { getSearch } from "@/app/lib/data";
import SearchList from "./searchList";

interface searchPageServerProps {
    query: {
        [key: string]: string;
    };
}

export default async function SearchPageServer({ query }: searchPageServerProps) {
    const data = await getSearch(query.value);

    const value = {
        query: query.value,
        data: data
    }

    return <SearchList value={value} />
}