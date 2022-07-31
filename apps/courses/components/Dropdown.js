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
        {trigger()}

        {/* <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot> */}
      </button>

      <div className={isOpen ? "block" : "hidden"}>
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="fixed inset-0 z-30 block h-full w-full cursor-default"
        ></button>
        <div className="absolute right-0 z-40">{dropdown()}</div>
      </div>
    </div>
  );
};

export default Dropdown;
