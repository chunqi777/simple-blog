import React, { SetStateAction } from "react";
import Vditor from "vditor";
import "vditor/dist/index.css";

interface MdVditorProps {
    setValue: React.Dispatch<SetStateAction<string>>
}

export default function MdVditor({ setValue }: MdVditorProps) {
    const [vd, setVd] = React.useState<Vditor>();

    React.useEffect(() => {
        const vditor = new Vditor("vditor", {
            height: 750,
            cache: {
                enable: false
            },
            placeholder: "请输入内容...",
            toolbarConfig: {
                pin: true,
            },
            input: (value) => {
                setValue(value); // 更新状态
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div id="vditor" className="vditor" />;
};