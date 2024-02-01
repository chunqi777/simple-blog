'use server'

import { AuthError } from 'next-auth';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { axios } from './api';
import { signIn, signOut } from "./auth/auth";
import { User, archives, card, paperContent, paperCreate, search, tableCard } from "./entity/paper";

export async function fetchCardData() {
    const res = (await axios.get("/guest/paperAll")).data

    if (res.code !== "200") {
        redirect("/404")
    }

    return res.data as card[];
}

export async function fetchArchivePaperList(type: string) {
    const res = (await axios.get(`/guest/archives/${type}`)).data

    return res.data as card[];
}

export async function fetchTypeList() {
    const res = (await axios.get("/guest/typeAll")).data

    return res.data as archives[];

}

export async function fetchPaperData(type: string, uid: string) {
    const res = (await axios.get(`/guest/paper/${type}/${uid}`)).data

    return res.data as paperContent;
}


export async function fetchAllPaperData() {
    const value: tableCard[] = [
        { uid: "12341111111111111111133333333333333333333", title: "简单博客", type: "java", date: "3024-1-23", view: 0, status: 0 },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", view: 0, status: 0 },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", view: 0, status: 0 },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", view: 0, status: 0 },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", view: 0, status: 0 },
        { uid: "1234", title: "简单博客", type: "java", date: "3024-1-23", view: 0, status: 0 },
    ]

    return value
}


export async function getUser(name: string): Promise<User | undefined> {
    try {
        const res = (await axios.get(`/admin/user`, { params: { name } })).data;

        if (res.code !== "200") {
            throw new Error(res.msg);
        }

        return res.data as User
    } catch (error) {
        console.error('报错:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function getSearch(search: string) {
    try {
        const res = (await axios.get(`/guest/search`, { params: { search } })).data;

        if (res.code !== "200") {
            throw new Error(res.msg);
        }

        return res.data as search[];
    } catch (error) {
        console.log('报错:', error);
        return [];
    }
}


export async function createBlog(data: paperCreate) {

    const res = await axios.post('/admin/add', data)

    revalidatePath('/dashboard/invoice');
    redirect("/admin/invoice")
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function SignOut() {
    await signOut();
    redirect("/")
}