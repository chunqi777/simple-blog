export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const debounce = (fn: Function, delay: number) => {
    let timer: any | null;

    return function (this: any, ...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay);
    };
};