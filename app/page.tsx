import Clock from "./ui/clock"

export default function Home() {
  const backgroundImage = '/background.png'

  return (
    <div className="flex flex-col">
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }} >
        <Clock />
      </div>
      <div className="flex h-full w-full">
        <div className=" bg-black mx-0 w-full md:mx-10" style={{ height: '1000px' }}></div>
      </div>
    </div>
  )
}
