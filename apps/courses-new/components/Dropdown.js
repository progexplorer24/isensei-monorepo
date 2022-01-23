import { useState } from "react";

const Dropdown = ({ trigger, dropdown }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [hasFocus, setHasFocus] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="block focus:outline-none"
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(true)}
      >
        <div className={isOpen ? "block" : "hidden"}></div>
        {trigger(isOpen, hasFocus)}
        {/* <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot> */}
      </button>

      <div className={isOpen ? "block" : "hidden"}>
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="z-30 block fixed inset-0 w-full h-full cursor-default"
        ></button>
        <div className="absolute z-40 right-0">{dropdown()}</div>
      </div>
    </div>
  );
};

export default Dropdown;
