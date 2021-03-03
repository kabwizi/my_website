import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function Contact() {
  const fullName = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const [messageSend, setMessageSend] = useState(false);

  return (
    <div className="mt-10 px-20 flex flex-col gap-10 items-center">
      <div className="flex gap-5 w-full">
        <div className="relative h-80 w-full">
          <Image
            src="/devices/macBookPro/img/lunch_1.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-80 w-full">
          <Image
            src="/devices/macBookPro/img/dinner_2.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-20 space-y-5">
        <div>
          <h1 className="text-center text-xs font-bold">Contact me</h1>
          <p className="text-3xs">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-stretch">
          <input
            ref={fullName}
            onChange={() => resetMessageSend()}
            className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
            type="text"
            placeholder="Votre nom complet"
          />
          <input
            ref={emailRef}
            onChange={() => resetMessageSend()}
            className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
            type="text"
            placeholder="Votre e-mail"
          />
          <input
            ref={subject}
            onChange={() => resetMessageSend()}
            className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
            type="text"
            placeholder="sujet"
          />
          <textarea
            ref={message}
            onChange={() => resetMessageSend()}
            className="border-2 border-gray-100 text-3xs w-full px-2 py-1 outline-none"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <AnimatePresence>
            {messageSend ? (
              <motion.p
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-200 text-center text-3xs py-2 rounded-sm"
              >
                Le message à bien été envoyé
              </motion.p>
            ) : null}
          </AnimatePresence>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (
                fullName.current &&
                subject.current &&
                emailRef.current &&
                message.current
              ) {
                setMessageSend(true);
                fullName.current.value = "";
                subject.current.value = "";
                emailRef.current.value = "";
                message.current.value = "";
              }
            }}
            className="bg-yellow-500 shadow cursor-pointer text-white text-center py-1 text-2xs"
          >
            Envoyer le message
          </motion.div>
        </div>
      </div>
    </div>
  );
  function resetMessageSend() {
    if (messageSend) {
      setMessageSend(false);
    }
  }
}

export default Contact;
