import { cardValue } from "../lib/data";
import Card from "./card";

const date = new Date();

// 获取年份
const year = date.getFullYear();

// 获取月份（注意：月份返回的是 0 到 11 的数字，需要加 1）
const month = date.getMonth() + 1;

// 获取日期
const day = date.getDate();

// 将年、月、日拼接成字符串
const formattedDate = `${year}-${month}-${day}`;

const Values: cardValue[] = [
    {
        date: formattedDate,
        title: "title",
        view: 100,
        type: "type",
        content: "content",
        imgName: "2",
        imgUrl: "/background/2.png",
    },
    {
        date: formattedDate,
        title: "title",
        view: 100,
        type: "type",
        content: "content",
        imgName: "2",
        imgUrl: "/background/2.png",
    },
    {
        date: formattedDate,
        title: "title",
        view: 100,
        type: "type",
        content: "content",
        imgName: "2",
        imgUrl: "/background/2.png",
    },
    {
        date: formattedDate,
        title: "title",
        view: 100,
        type: "type",
        content: "content",
        imgName: "2",
        imgUrl: "/background/2.png",
    },
    {
        date: formattedDate,
        title: "title",
        view: 100,
        type: "type",
        content: "content",
        imgName: "2",
        imgUrl: "/background/2.png",
    },
    {
        date: formattedDate,
        title: "title",
        view: 100,
        type: "type",
        content: "content",
        imgName: "2",
        imgUrl: "/background/2.png",
    }
]


export default function CardGroup() {
    return (
        <>
            {Values.map((value, index) => {
                return (
                    <Card key={index} value={value} />
                )
            })}
        </>
    )
}