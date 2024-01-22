import { SearchIcon } from "../icons/icon";


interface searchProps {
    searchWidth?: string;
    searchHeight?: string;
    placeholder?: string;
    searchType?: string;
    searchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchWidth = "256px", searchHeight = "40px", placeholder = "Search", searchType = "text", searchValue }: searchProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchValue(e.target.value);
    }

    return (
        <div className="relative" style={{ width: searchWidth, height: searchHeight }}>
            <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 text-[#73767a]" strokeWidth={1.8} />
            <input className="w-full h-full pl-10 pr-3 rounded-lg border-2 border-solid placeholder:text-[#73767a] outline-none focus:border-origin-100 transition-colors duration-300"
                type={searchType} placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}