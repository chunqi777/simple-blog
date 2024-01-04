import Overview from "./ui/overview";


export default function Home() {

  const backgroundImage = "url(/background/1.png)"
  return (
    <div className="flex flex-col">
      <div className="h-screen w-full bg-cover bg-center relative bg-no-repeat bg-fixed before:block before:bg-[url(/dot.gif)] before:h-full before:bg-fixed" style={{ backgroundImage: backgroundImage }} >
        <Overview />
      </div>
      <div className="flex h-full w-full bg-slate-50">
        <div className="bg-white mx-0 w-full md:mx-10 h-[10000px]"></div>
      </div>
    </div>
  )
}
