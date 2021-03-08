import Image from "next/image";
import React from "react";

function Message({
  attachment,
  src,
  message,
  userName,
}: {
  attachment: boolean;
  src: string;
  message: string;
  userName: string;
}) {
  return (
    <div className="flex items-start gap-2 border-b py-4 ">
      <div className="relative h-7 w-7 rounded-full overflow-hidden flex-none">
        <Image src={src} layout="fill" objectFit="cover" alt="user image" />
      </div>
      <div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1">
            <div>
              <div className="flex gap-1 items-center">
                <p className="text-xs font-semibold">{userName}</p>
                <p className="text-2xs text-gray-500">
                  &lt;anagouchipou@gmail.com&gt;
                </p>
              </div>
              <p className="text-2xs text-gray-500">À sergekabwizi@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/devices/introWebSite/star_gray.svg"
              height={10}
              width={10}
              alt="icon stars"
            />
            <Image
              className="rounded-full"
              src="/devices/introWebSite/attachment_gray.svg"
              height={10}
              width={10}
              alt="icon attachment"
            />
            <p className="text-2xs text-gray-500">5:10</p>
            <Image
              className="rounded-full"
              src="/devices/introWebSite/vertical_three_dots_gray.svg"
              height={10}
              width={10}
              alt="icon vertical three dots"
            />
          </div>
        </div>
        <p className="text-2xs mt-2">{message}</p>
        {attachment ? (
          <div className="mt-2 flex justify-start text-2xs">
            <Image
              src="/devices/introWebSite/word_document_attachement.svg"
              width={165}
              height={120}
              alt="document"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Message;
