import React, { useRef } from "react";
import Image from "next/image";
import { useData } from "../MackBookProContext";
import { AnimateSharedLayout, motion } from "framer-motion";

function CommentSection() {
  const context = useData();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const commentContainerRef = useRef<HTMLDivElement>(null);

  return (
    <AnimateSharedLayout>
      <motion.div layout className="mt-5">
        <div className="flex items-center mb-2">
          <p className="font-semibold pr-5 text-xs">Commentaire</p>
          <div className="border-yellow-500 border-t flex-1 mt-1"></div>
        </div>
        <motion.div
          ref={commentContainerRef}
          className=" space-y-2 max-h-32 overflow-y-auto"
        >
          {context?.data.currentRecipe &&
            context?.data.recipes
              .filter((a) => a.title === context?.data.currentRecipe?.title)[0]
              .comment.sort((a, b) => b.date.getTime() - a.date.getTime())
              .map((e, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    {e.user.src ? (
                      <Image src={e.user.src} layout="fill" objectFit="cover" />
                    ) : (
                      <div className="bg-gray-200 flex justify-center items-center h-full">
                        <Image
                          src="/devices/macBookPro/user_white.svg"
                          width={10}
                          height={10}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p
                      className="text-3xs font-semibold"
                      key={index}
                    >{`${e.user.firstName} ${e.user.lastName}`}</p>
                    <p className="text-4xs text-gray-500">
                      {formatedDate(e.date)}
                    </p>
                    <p className="text-3xs">{e.comment}</p>
                  </div>
                </motion.div>
              ))}
        </motion.div>
        <div className="flex flex-col gap-2 items-stretch w-1/2 mt-5">
          <h2 className="text-2xs font-semibold">Envoyer un commentaire</h2>
          <textarea
            ref={commentRef}
            className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none h-28"
            placeholder="Commentaire"
          ></textarea>
          <div className="flex gap-2">
            <input
              ref={lastNameRef}
              className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
              type="text"
              placeholder="Votre nom"
            />
            <input
              ref={firstNameRef}
              className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
              type="text"
              placeholder="Votre prénom"
            />
            <input
              ref={emailRef}
              className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
              type="text"
              placeholder="Votre e-mail"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (
                context &&
                commentRef.current &&
                emailRef.current &&
                firstNameRef.current &&
                lastNameRef.current
              ) {
                context.dispatchData({
                  type: "ADD_COMMENT",
                  payload: {
                    recipe: context?.data.currentRecipe,
                    comment: {
                      comment: commentRef.current.value,
                      date: new Date(),
                      user: {
                        email: emailRef.current.value,
                        firstName: firstNameRef.current.value,
                        lastName: lastNameRef.current.value,
                        src: null,
                      },
                    },
                  },
                });
                commentRef.current.value = "";
                emailRef.current.value = "";
                firstNameRef.current.value = "";
                lastNameRef.current.value = "";
              }
              commentContainerRef.current?.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="bg-yellow-500 cursor-pointer text-white text-center py-1 text-2xs shadow"
          >
            Envoyer le message
          </motion.div>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
  function formatedDate(date: Date) {
    if (date.getDate() === new Date().getDate()) {
      return date.toLocaleTimeString().slice(0, 5);
    } else {
      const value = `${date
        .toDateString()
        .slice(0, 3)}, ${date.toTimeString().slice(0, 5)}`;
      return value;
    }
  }
}

export default CommentSection;
