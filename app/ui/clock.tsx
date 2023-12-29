'use client'

import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    //TO-DO
    return (
        <div className="flex absolute left-0 right-0 top-0 bottom-0 m-auto transition-all hidden sm:block">
            <div className="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-mono">
                <div suppressHydrationWarning>{time.toLocaleTimeString()}</div>
            </div>
        </div>
    );
}