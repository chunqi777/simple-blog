import { randomInt } from "./lib/utils";
import Content from "./ui/content";
import Overview from "./ui/overview";


export default function Home() {
  // 随机背景
  const backgroundImage = "url(/background/" + randomInt(1, 4) + ".png)"
  return (
    <div className="flex flex-col">
      <div className="h-screen w-full bg-cover bg-center relative bg-no-repeat bg-fixed before:block before:bg-[url(/dot.gif)] before:h-full before:bg-fixed" style={{ backgroundImage: backgroundImage }} >
        <Overview />
      </div>
      <div className="flex h-full w-full bg-slate-50">
        <Content />
      </div>
    </div>
  )
}