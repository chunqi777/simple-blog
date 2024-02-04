type Prettify<T> = { [K in keyof T]: T[K] } & {}
type Optional<T, K extends keyof T> = Prettify<Omit<T, K> & Partial<Pick<T, K>>>

export type paper = {
    uid: string,
    title: string,
    type: string,
    date: string,
    description: string,
    content: string,
    imgName: string,
    imgUrl: string,
    status?: number,
    view: number,
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type card = Omit<paper, 'content'>
export type tableCard = Omit<paper, 'content' | 'description' | 'imgName' | 'imgUrl'>
export type archives = Pick<paper, 'uid' | 'type'>
export type paperContent = Omit<paper, 'description' | 'type'>
export type paperCreate = Optional<paper, 'uid'>
export type search = Omit<paper, 'content' | 'imgName' | 'imgUrl'>

