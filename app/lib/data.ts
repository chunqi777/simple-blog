'use server'

import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { axios } from './api';

export type cardValue = {
    uid: string,
    title: string,
    type: string,
    date: string,
    imgName: string,
    imgUrl: string,
    view: number,
    description?: string,
}

export type paperValue = {
    uid?: string,
    title: string,
    type: string,
    date: string,
    content?: string,
    imgName: string,
    imgUrl: string,
    status?: number,
    view?: number,
    description?: string,
}

export type ArchivesType = {
    type: string
}

export async function fetchCardData() {
    const res = (await axios.get("/guest/paperAll")).data

    if (res.code !== "200") {
        redirect("/404")
    }


    return res.data as cardValue[];
}

export async function fetchArchivePaperList(type: string) {
    const res = (await axios.get(`/guest/archives/${type}`)).data

    return res.data as cardValue[];
}

export async function fetchTypeList() {
    const res = (await axios.get("/guest/typeAll")).data

    return res.data as ArchivesType[];

}

export async function fetchPaperData(type: string, uid: string) {
    const res = (await axios.get(`/guest/paper/${type}/${uid}`)).data

    return res.data as paperValue;
}


export async function fetchAllPaperData() {
    unstable_noStore()
    const value: paperValue[] = [
        { uid: "12341111111111111111133333333333333333333", title: "简单博客", type: "java", date: "3024-1-23", status: 0, imgName: "123", imgUrl: "123" },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0, imgName: "123", imgUrl: "123" },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0, imgName: "123", imgUrl: "123" },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0, imgName: "123", imgUrl: "123" },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0, imgName: "123", imgUrl: "123" },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", status: 0, imgName: "123", imgUrl: "123" },
    ]

    return value
}

export async function createBlog(data: paperValue) {
    unstable_noStore()

    const res = await axios.post('/admin/add', data)

    revalidatePath('/dashboard/invoice');
    redirect("/admin/invoice")
}