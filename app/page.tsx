
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-screen w-full bg-cover bg-center relative bg-no-repeat bg-fixed bg-[url(/background.png)] before:block before:bg-[url(/dot.gif)] before:h-full before:bg-fixed">
        <div className="h-full w-full absolute top-0 left-0">

        </div>
      </div>
      <div className="flex h-full w-full bg-slate-50">
        <div className="bg-white mx-0 w-full md:mx-10 h-[1000px]"></div>
      </div>
    </div>
  )
}
