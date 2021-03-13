import React, { useRef, useState } from "react";
import BigTitle from "./BigTitle";
import Image from "next/image";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useData } from "../WebsiteMainContext";
import axios from "axios";
import ContactInput from "./ContactInput";
import ContactFileInput from "./ContactFileInput";

function SectionContact({
  contactRef,
}: {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const context = useData();

  const [file, setFile] = useState<File | null>(null);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [sendEmailStatus, setSendEmailStatus] = useState<{
    status: boolean;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section ref={contactRef} className="relative z-10 flex justify-center">
      <div className="screenMaxSize mt-16 mb-20 w-full">
        {context ? (
          <BigTitle
            textColor="CONTACT"
            icon1="/main/envelope.svg"
            title={
              context.data.language[context.data.languageIndex].section9.parent
                .title
            }
            description={
              context.data.language[context.data.languageIndex].section9.parent
                .description
            }
          />
        ) : null}

        <div className="flex flex-col-reverse gap-16 lg:flex-row mt-16">
          {/**=============== left side =============== */}
          <div className="flex-1 flex  flex-row lg:flex-col justify-around items-center flex-wrap gap-10">
            <motion.a
              href="https://github.com/kabwizi?tab=repositories"
              rel="noopener"
              target="_blank"
              aria-label="Github"
              whileHover={{ scale: 1.2 }}
              className="baseButtonWitheStyleTailwind smallButtonSize"
            >
              <Image
                src="/main/github.svg"
                width={20}
                height={20}
                alt="icon github"
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/serge-kabwizi-16629a127/"
              rel="noopener"
              target="_blank"
              aria-label="Linkedin"
              whileHover={{ scale: 1.2 }}
              className="baseButtonWitheStyleTailwind smallButtonSize"
            >
              <Image
                src="/main/linkedin.svg"
                width={20}
                height={20}
                alt="icon linkedin"
              />
            </motion.a>
            <motion.a
              href="mailto:kabwiziserge@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              aria-label="E-mail me"
              className="baseButtonWitheStyleTailwind smallButtonSize"
            >
              <Image
                src="/main/envelope_black.svg"
                width={20}
                height={20}
                alt="icon envelope"
              />
            </motion.a>
            <motion.a
              href="tel:+18192301622"
              whileHover={{ scale: 1.09 }}
              className="bg-white flex justify-center h-10 w-48 items-center font-semibold rounded-md shadow-xl cursor-pointer gap-2"
            >
              <Image
                src="/main/cellphone.svg"
                width={20}
                height={20}
                alt="icon cellphone"
              />
              <p> +1 (819) 230 1622</p>
            </motion.a>
          </div>
          {/**=============== right side =============== */}
          <div className="flex flex-1 flex-col gap-2">
            <ContactInput
              inputType="INPUT"
              label={
                context?.data.language[context.data.languageIndex].section9
                  .label.label1!
              }
              inputRef={fullNameRef}
              setValue={setFullNameError}
              error={fullNameError}
              forAndId="fullName"
              placeholder={
                context?.data.language[context.data.languageIndex].section9
                  .child.child1!
              }
            />
            <ContactInput
              inputType="INPUT"
              label={
                context?.data.language[context.data.languageIndex].section9
                  .label.label2!
              }
              inputRef={emailRef}
              setValue={setEmailError}
              error={emailError}
              forAndId="email"
              placeholder={
                context?.data.language[context.data.languageIndex].section9
                  .child.child2!
              }
            />
            <ContactInput
              inputType="TEXTAREA"
              label={
                context?.data.language[context.data.languageIndex].section9
                  .label.label3!
              }
              inputTextAreaRef={messageRef}
              setValue={setMessageError}
              error={messageError}
              forAndId="message"
              placeholder={
                context?.data.language[context.data.languageIndex].section9
                  .child.child3!
              }
            />
            <ContactFileInput
              placeholder={
                file
                  ? file.name
                  : context?.data.language[context.data.languageIndex].section9
                      .child.child4!
              }
              file={file}
              label={
                context?.data.language[context.data.languageIndex].section9
                  .label.label4!
              }
              setValue={setFile}
            />
            <motion.div
              whileHover={{ scale: 1.07 }}
              onClick={() => {
                if (
                  fullNameRef.current &&
                  emailRef.current &&
                  messageRef.current &&
                  fullNameRef.current.value.trim() !== "" &&
                  emailRef.current.value.trim() !== "" &&
                  messageRef.current.value.trim() !== ""
                ) {
                  const data = new FormData();
                  data.append("fullName", fullNameRef.current.value);
                  data.append("email", emailRef.current.value);
                  data.append("message", messageRef.current.value);
                  if (file) {
                    data.append("file", file);
                  }
                  setLoading(true);
                  axios
                    .post("http://localhost:3000/api/sendEmail", data)
                    .then((res) => {
                      console.log(res);
                      setLoading(false);
                      if (res.data) {
                        setSendEmailStatus({
                          status: true,
                          message: "Votre message à bien été envoyé",
                        });
                        if (
                          fullNameRef.current &&
                          emailRef.current &&
                          messageRef.current
                        ) {
                          fullNameRef.current.value = "";
                          emailRef.current.value = "";
                          messageRef.current.value = "";
                        }
                        if (file) setFile(null);
                      } else {
                        setSendEmailStatus({
                          status: false,
                          message:
                            "Une erreur est servenue veuillez ressayer plus tard",
                        });
                      }
                    })
                    .catch((err) => {
                      setSendEmailStatus({
                        status: false,
                        message:
                          "Une erreur est servenue veuillez ressayer plus tard",
                      });
                    });
                } else {
                  if (fullNameRef.current?.value.trim() === "") {
                    setFullNameError("Veuillez entrer votre nom complet");
                  }
                  if (emailRef.current?.value.trim() === "") {
                    setEmailError("Veuillez entrer votre courriel");
                  }
                  if (messageRef.current?.value.trim() === "") {
                    setMessageError("Veuillez écrire un message");
                  }
                }
              }}
              className="baseButtonBlackStyleTailwind h-10 flex items-center  font-semibold"
            >
              {
                context?.data.language[context.data.languageIndex].section9
                  .child.child5
              }
            </motion.div>
            <AnimateSharedLayout>
              <motion.div layout>
                <AnimatePresence>
                  {loading ? (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full flex justify-center"
                    >
                      <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <AnimatePresence>
                  {sendEmailStatus ? (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`${
                        sendEmailStatus.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-200 text-red-700"
                      }  mt-2 flex justify-center rounded py-2 font-semibold `}
                    >
                      {sendEmailStatus.message}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
