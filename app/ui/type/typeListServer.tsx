import { fetchTypeList } from "@/app/lib/data";
import Link from "next/link";


export default async function TypeList() {
    const archivesValue = await fetchTypeList();

    return (
        archivesValue.map((data, key) => {
            return (
                <Link href={"/archives/" + data.type} key={key} className="block text-center mx-4 my-2 px-3 py-[5px] bg-[#FE9600] rounded text-3xl hover:scale-[1.2] transition-all">
                    <div>{data.type}</div>
                </Link>
            )
        })
    )
}