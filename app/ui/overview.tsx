import ArrowDown from "./arrowDown"

`use client`

export default function Overview() {
    return (
        <div className="h-full w-full absolute top-0 left-0 font-[JelleeFont]">
            <div className="md:flex flex-col justify-between h-64 w-[750px] absolute top-[59%] left-[50%] -translate-x-[50%] -translate-y-[59%] hidden ">
                <div className="flex items-center mx-auto text-7xl text-white h-[120px]">
                    <p>HELLO,WORLD!</p>
                </div>
                <div className="flex items-center text-white mx-auto h-[90px] bg-[rgba(0,0,0,.5)] w-[520px] rounded-md">
                    <p className="flex mx-auto before:content-['“'] before:mr-1 after:content-['”'] after:ml-1">
                        You got to put the past behind you before you can move on
                    </p>
                </div>
            </div>
            <ArrowDown />
        </div>
    )
}