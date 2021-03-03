import React from "react";
import Image from "next/image";
import { IUser } from "../MackBookProContext";

function Creator({ user }: { user: IUser }) {
  return user ? (
    <div className="flex gap-1 items-center mt-2">
      <div className="relative w-6 h-6 rounded-full overflow-hidden">
        <Image src={user.src} layout="fill" />
      </div>
      <div>
        <p className="font-semibold text-3xs">{user.firstName}</p>
        <p className="text-4xs text-gray-500">{user.lastName}</p>
      </div>
    </div>
  ) : null;
}

export default Creator;
