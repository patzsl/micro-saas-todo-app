import { auth } from "@/services/auth"
import { UserInfo } from "./_components/user-info"
import RoomPlayer from "../player/player"

export default async function Page() {
  const session = await auth()
  
  return (
    <main className="flex flex-col items-end h-screen p-4">
      <UserInfo user={session?.user} />
      {/* <img
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
        height="600"
        src="/placeholder.svg"
        width="1200"
      /> */}
      <RoomPlayer/>

    </main>
  )
}