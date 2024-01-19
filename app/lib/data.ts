'use server'

import { unstable_noStore } from "next/cache";

export type cardValue = {
    date: string,
    title: string,
    view: number,
    type: string,
    content: string,
    imgName: string,
    imgUrl: string,
}

const value: cardValue = {
    date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    title: "title",
    view: 100,
    type: "type",
    content: "content",
    imgName: "2",
    imgUrl: "/background/5.png",
}

export async function fetchNullData() {
    const values: cardValue[] = [];
    return values;
}

export async function fetchCardData() {
    unstable_noStore()
    const values: cardValue[] = [];
    for (let i = 0; i < 10; i++) {
        values.push(value);
    }

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    return values;
}

export async function fetchTypeListData() {
    unstable_noStore()
    const values: cardValue[] = [];
    for (let i = 0; i < 10; i++) {
        values.push(value);
    }

    return values;
}

export type ArchivesList = string[]

export async function fetchArchivesList() {
    unstable_noStore()

    const values: ArchivesList = ["随便聊聊", "python", "c++", "java", "js", "html", "css", "ts", "c#", "php", "sql", "go", "rust", "kotlin", "swift", "dart",]


    return values;
}