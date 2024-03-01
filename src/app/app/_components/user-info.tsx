'use client'

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { UserAvatar } from "./avatar";
import RoomPlayer from "@/app/player/player";
import { Input } from "@/components/ui/input"


type Props = {
  user: Session['user']
}

export function UserInfo({ user }: Props) {
  if(!user) return

  return (
    <div className="w-full flex flex-row items-center justify-center justify-between gap-4">
      <h1>share room</h1>
      <Input className="w-1/2 rounded-md" placeholder="Paste YouTube link here" type="text" />
      <button className="cursor-pointer" onClick={() => signOut()}>
        <UserAvatar />
      </button>
      {/* <RoomPlayer/> */}
    </div>
  )
}