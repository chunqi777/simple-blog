'use server'

import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { axios } from './api';

export type cardValue = {
    title: string,
    type: string,
    date: string,
    imgName: string,
    imgUrl: string,
    view: number,
}

export type paperValue = {
    id?: string,
    title: string,
    type: string,
    date: string,
    content?: string,
    imgName?: string,
    imgUrl?: string,
    status: number,
}

export type ArchivesList = string[]

const value: cardValue = {
    date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    title: "title",
    view: 100,
    type: "type",
    imgName: "2",
    imgUrl: "/background/5.png",
}


export async function fetchCardData() {
    unstable_noStore()
    const res = (await axios.get("/guest/paperAll")).data

    if (res.code !== "200") {
        redirect("/404")
    }

    return res.data;
}

export async function fetchTypeListData() {
    unstable_noStore()
    const values: cardValue[] = [];
    for (let i = 0; i < 10; i++) {
        values.push(value);
    }

    return values;
}

export async function fetchArchivesList() {
    unstable_noStore()

    const values: ArchivesList = ["随便聊聊", "python", "c++", "java", "js", "html", "css", "ts", "c#", "php", "sql", "go", "rust", "kotlin", "swift", "dart",]

    return values;
}

export async function fetchAllPaperData() {
    unstable_noStore()
    const value: paperValue[] = [
        { id: "12341111111111111111133333333333333333333", title: "简单博客", type: "java", date: "3024-1-23", status: 0 },
        { id: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0 },
        { id: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0 },
        { id: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0 },
        { id: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0 },
        { id: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0 },
    ]

    return value
}

export async function createBlog(data: paperValue) {
    unstable_noStore()

    revalidatePath('/dashboard/invoice');
    redirect("/admin/invoice")
}