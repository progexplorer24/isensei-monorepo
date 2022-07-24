import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { css, cx } from "@emotion/css";

const selectorIcon = (styles: string, ariaHidden = false): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={ariaHidden}
    className={styles}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
    />
  </svg>
);

const checkIcon = (styles: string, ariaHidden = false): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles}
    aria-hidden={ariaHidden}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const inputText = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #595b5c;
`;

const people = [
  { name: "Use the project owner’s API key..." },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

type ListboxExampleProps = {
  wrapperStyles?: string;
};

export default function ListboxExample({ wrapperStyles = "" }) {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className={cx(wrapperStyles)}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className={cx("block truncate", inputText)}>
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {selectorIcon("h-5 w-5 text-gray-400", true)}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={cx(
                          `block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`,
                          inputText
                        )}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {checkIcon("w-5 h-5", true)}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
