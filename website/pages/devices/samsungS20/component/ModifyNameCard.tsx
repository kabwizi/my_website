import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useData } from "../SamsungS20Context";

function ModifyNameCard({
  setShowEdit,
}: {
  setShowEdit: React.Dispatch<
    React.SetStateAction<{
      showEdit: boolean;
      type: string;
    }>
  >;
}) {
  const context = useData();
  const changeNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (changeNameRef.current) changeNameRef.current.focus();
  }, []);

  return (
    <motion.div
      initial={{ height: "0px", opacity: 1 }}
      animate={{ height: "130px" }}
      exit={{ height: "1px", opacity: 0, y: "20px" }}
      className="bg-white absolute bottom-0 w-full p-4 shadow-2xl overflow-hidden"
    >
      <h2 className="font-bold">Changer votre nom</h2>
      <input
        ref={changeNameRef}
        className="outline-none mt-2 mb-4"
        type="text"
        placeholder="Entrer votre nom"
      />
      <div className="flex justify-end gap-4 text-sm font-bold">
        <p
          onClick={() => setShowEdit({ showEdit: false, type: "" })}
          className="text-purple-700 cursor-pointer"
        >
          Annuler
        </p>
        <p
          onClick={() => {
            if (
              changeNameRef.current &&
              changeNameRef.current.value.trim().length > 0
            ) {
              context?.dispatchData({
                type: "CHANGE_CURRENT_USER",
                payload: {
                  user: {
                    ...context.data.currentUser,
                    fullName: changeNameRef.current.value,
                  },
                },
              });
              setShowEdit({ showEdit: false, type: "" });
            }
          }}
          className="text-purple-700 cursor-pointer"
        >
          Enregistrer
        </p>
      </div>
    </motion.div>
  );
}

export default ModifyNameCard;
