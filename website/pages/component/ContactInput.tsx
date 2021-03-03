import React from "react";

function ContactInput({
  inputType,
  label,
  inputRef,
  inputTextAreaRef,
  setValue,
  error,
  placeholder,
  forAndId,
}: {
  inputType: "INPUT" | "TEXTAREA";
  label: string;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  inputTextAreaRef?: React.MutableRefObject<HTMLTextAreaElement | null>;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | null;
  placeholder: string;
  forAndId: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-sm text-white" htmlFor={forAndId}>
        {label}
      </label>
      {inputType === "INPUT" ? (
        <input
          id={forAndId}
          ref={inputRef}
          onChange={(e) => {
            if (e.target.value.trim() !== "" && error !== null) {
              setValue(null);
            }
          }}
          className="py-2 pl-5 rounded-md outline-none shadow-xl font-semibold flex-1"
          type="text"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={forAndId}
          ref={inputTextAreaRef}
          onChange={(e) => {
            if (e.target.value.trim() !== "" && error !== null) {
              setValue(null);
            }
          }}
          className="py-2 pl-5 rounded-md outline-none h-36 shadow-xl font-semibold fontOpacity"
          name="message"
          placeholder={placeholder}
        ></textarea>
      )}
      {error ? (
        <p className="text-white font-semibold text-xs">{error}</p>
      ) : null}
    </div>
  );
}

export default ContactInput;
