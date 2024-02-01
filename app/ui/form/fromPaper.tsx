'use client'

import { createBlog } from "@/app/lib/data";
import { paperCreate } from "@/app/lib/entity/paper";
import clsx from "clsx";
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import MdVditor from "../markdownEditor/MdVditor";

export default function FromPaper() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fromSubmit = () => {
        setIsLoading(true);
        const data: paperCreate = {
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
            title: title,
            type: type,
            content: value,
            imgName: "abab",
            imgUrl: "/background/4.png",
            status: 1,
            view: 0,
            description: "测试哦"
        }

        createBlog(data).then(() => {
            setIsLoading(false);
        })
    }

    return (
        <div className="min-h-screen px-10 pt-10">
            <div className="w-full h-full">
                <div className="flex flex-nowrap justify-between items-center h-10 mb-2">
                    <div className="text-2xl">
                        <input className="border-solid border-2 rounded px-2 mx-2"
                            maxLength={20} type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input className="border-solid border-2 rounded px-2 mx-2"
                            maxLength={20} type="text" name="type" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    <button className={clsx("w-[150px] h-full text-2xl rounded hover:text-3xl text-center transition-all duration-300",
                        { "bg-[rgba(0,0,0,1)]": isLoading, "bg-[rgba(254,150,0,1)]": !isLoading }
                    )} onClick={fromSubmit}>Submit</button>
                </div>
                <div className="w-full h-full">
                    <MdVditor setValue={setValue} />
                </div>
            </div>
        </div>
    )
}