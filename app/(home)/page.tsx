import Image from "next/image";
import { randomInt } from "../lib/utils";
import Content from "../ui/home/content";
import Overview from "../ui/home/overview";


export default function Home() {
  // 随机背景
  const backgroundImage = "/background/" + randomInt(1, 4) + ".png"
  return (
    <div className="flex flex-col">
      <div className="h-screen w-full relative">
        <div className="h-full w-full overflow-hidden before:block before:bg-[url(/dot.gif)] before:h-full before:w-full before:z-20 before:absolute before:top-0">
          <Image
            src={backgroundImage}
            alt="background"
            fill
            className="object-cover"
            quality={20}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQItX2TmgAAAABJRU5ErkJggg=="
          />
        </div>
        <Overview />
      </div>
      <div className="flex h-full w-full bg-slate-50">
        <Content />
      </div>
    </div>
  )
}