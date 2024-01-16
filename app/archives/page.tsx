import Link from "next/link"

export default function TypeHome() {

    const data = ["随便聊聊", "python", "c++", "java", "js", "html", "css", "ts", "c#", "php", "sql", "go", "rust", "kotlin", "swift", "dart",]

    return (
        <div className="w-full h-screen flex justify-center items-center pt-[56px]">
            <div className="w-full md:w-[750px] min-h-3/4  flex flex-col justify-center items-center flex-wrap overflow-hidden">
                <div className="flex flex-wrap justify-center">
                    <>
                        {data.map((data, key) => {
                            return (
                                <Link href={"/archives/" + data} key={key} className="block text-center mx-4 my-2 px-3 py-[5px] bg-[#FE9600] rounded text-3xl hover:scale-[1.2] transition-all">
                                    <div>{data}</div>
                                </Link>
                            )
                        })}
                    </>
                </div>
            </div>
        </div>
    )
}