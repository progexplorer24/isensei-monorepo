module EditInactiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg viewBox="0 0 20 20" className ariaHidden fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
}

module EditActiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
}

module DuplicateInactiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
}

module DuplicateActiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
}

module ArchiveInactiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="10" height="8" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
}

module ArchiveActiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="10" height="8" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="4" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
}

module MoveInactiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
}

module MoveActiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
}

module DeleteInactiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
}

module DeleteActiveIcon = {
  @react.component
  let make = (~className, ~ariaHidden) =>
    <svg className ariaHidden viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
      <rect x="5" y="6" width="10" height="10" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
}

module Dropdown = {
  module Styles = {
    open Tailwind
    let div = twStyle([w(#56), textRight, fixed, top(#16)])
    let menu = twStyle([relative, inlineBlock, textLeft])
    let button = twStyle([
      inlineFlex,
      justifyCenter,
      w(#full),
      p(#x(#4)),
      p(#y(#4)),
      textSize(#sm),
      fontWeight(#500),
      textColor(#white),
      bg(#black, ~opacity=0.2),
      rounded(#all(#md)),
      hover([bg(#black, ~opacity=0.3)]),
      focus([outlineNone]),
      // focusVisible([ring(~width=#2, ~color=#white, ~opacity=0.75, ())]),
    ])
  }

  @react.component
  let make = (~_as) =>
    <div className=Styles.div>
      <Menu__Headless _as="div" className=Styles.menu>
        {_ => <>
          <div>
            <Menu__Headless.Button className=Styles.button>
              {_open => {
                <>
                  {React.string("Options")}
                  <Heroicons.Outline.ChevronDownIcon
                    className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                    ariaHidden={true}
                  />
                </>
              }}
            </Menu__Headless.Button>
          </div>
          <Transition__Headless
            _as={"fragment"}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu__Headless.Items
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {_ => <>
                <div className="px-1 py-1 ">
                  <Menu__Headless.Item>
                    {({active, _}) =>
                      <button
                        className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        {active
                          ? <EditActiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />
                          : <EditInactiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />}
                        {React.string("Edit")}
                      </button>}
                  </Menu__Headless.Item>
                  <Menu__Headless.Item>
                    {({active, _}) =>
                      <button
                        className={`${active
                            ? "bg-violet-500 text-white"
                            : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        {active
                          ? <DuplicateActiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />
                          : <DuplicateInactiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />}
                        {React.string("Duplicate")}
                      </button>}
                  </Menu__Headless.Item>
                  <div className="px-1 py-1">
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                          {active
                            ? <ArchiveActiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />
                            : <ArchiveInactiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />}
                          {React.string("Archive")}
                        </button>}
                    </Menu__Headless.Item>
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                          {active
                            ? <MoveActiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />
                            : <MoveInactiveIcon className="w-5 h-5 mr-2" ariaHidden={true} />}
                          {React.string("Move")}
                        </button>}
                    </Menu__Headless.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <button
                          className={`${active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                          {active
                            ? <DeleteActiveIcon
                                className="w-5 h-5 mr-2 text-violet-400" ariaHidden={true}
                              />
                            : <DeleteInactiveIcon
                                className="w-5 h-5 mr-2 text-violet-400" ariaHidden={true}
                              />}
                          {React.string("Delete")}
                        </button>}
                    </Menu__Headless.Item>
                  </div>
                </div>
              </>}
            </Menu__Headless.Items>
          </Transition__Headless>
        </>}
      </Menu__Headless>
    </div>
}

module Listbox = {
  type person = {name: string}
  let people: array<person> = [
    {name: "Wade Cooper"},
    {name: "Arlene Mccoy"},
    {name: "Devon Webb"},
    {name: "Tom Cook"},
    {name: "Tanya Fox"},
    {name: "Hellen Schmidt"},
  ]

  @react.component
  let make = () => {
    let (selected, setSelected) = React.useState(_ => people[0])
    let onChange = person => setSelected(_prev => person)

    let renderOptions = React.array(
      Js.Array2.mapi(people, (person, personIdx) =>
        <Listbox__Headless.Option
          key={Belt.Int.toString(personIdx)}
          className={active =>
            `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`}
          value={person}>
          {({selected, active, _}) => <>
            <span className={`${selected ? "font-medium" : "font-normal"} block truncate`}>
              {React.string(person.name)}
            </span>
            {selected
              ? <span
                  className={`${active ? "text-amber-600" : "text-amber-600"}
                                absolute inset-y-0 left-0 flex items-center pl-3`}>
                  <Heroicons.Solid.CheckIcon className="w-5 h-5" ariaHidden={true} />
                </span>
              : React.null}
          </>}
        </Listbox__Headless.Option>
      ),
    )

    <div className="w-72 fixed top-16">
      <Listbox__Headless value={selected} onChange>
        {_ =>
          <div className="relative mt-1">
            <Listbox__Headless.Button
              className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              {_ => <>
                <span className="block truncate"> {React.string(selected.name)} </span>
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Heroicons.Solid.SelectorIcon
                    className="w-5 h-5 text-gray-400" ariaHidden={true}
                  />
                </span>
              </>}
            </Listbox__Headless.Button>
            <Transition__Headless
              leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox__Headless.Options
                className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {_ => renderOptions}
              </Listbox__Headless.Options>
            </Transition__Headless>
          </div>}
      </Listbox__Headless>
    </div>
  }
}

module Switch = {
  @react.component
  let make = () => {
    let (enabled, setEnabled) = React.useState(_ => false)

    <div className="py-16">
      <Switch__Headless
        checked={enabled}
        onChange={_ => setEnabled(_prev => !_prev)}
        className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        {_ => <>
          <span className="sr-only"> {React.string("Use setting")} </span>
          <span
            ariaHidden={true}
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </>}
      </Switch__Headless>
    </div>
  }
}

module Disclosure = {
  @react.component
  let make = () =>
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure__Headless>
          {({_open, _}) => <>
            <Disclosure__Headless.Button
              className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              {_ => <>
                <span> {React.string("What is your refund policy?")} </span>
                <Heroicons.Solid.ChevronUpIcon
                  className={`${_open ? "transform rotate-180" : ""} w-5 h-5 text-purple-500`}
                />
              </>}
            </Disclosure__Headless.Button>
            <Disclosure__Headless.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {_ =>
                React.string("If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.")}
            </Disclosure__Headless.Panel>
          </>}
        </Disclosure__Headless>
        <Disclosure__Headless _as="div" className="mt-2">
          {({_open, _}) => <>
            <Disclosure__Headless.Button
              className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              {_ => <>
                <span> {React.string("Do you offer technical support?")} </span>
                <Heroicons.Solid.ChevronUpIcon
                  className={`${_open ? "transform rotate-180" : ""} w-5 h-5 text-purple-500`}
                />
              </>}
            </Disclosure__Headless.Button>
            <Disclosure__Headless.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {_ => {React.string("No.")}}
            </Disclosure__Headless.Panel>
          </>}
        </Disclosure__Headless>
      </div>
    </div>
}

module Dialog = {
  @react.component
  let make = () => {
    let (isOpen, setIsOpen) = React.useState(_ => true)

    let closeModal = setIsOpen(_ => false)

    let openModal = setIsOpen(_ => true)

    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          onClick={_ => openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {React.string("Open dialog")}
        </button>
      </div>
      <Transition__Headless appear={true} show={isOpen} _as={"react.fragment"}>
        <Dialog__Headless
          _as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={_ => closeModal}>
          {_ =>
            <div className="min-h-screen px-4 text-center">
              <Transition__Headless.Child
                _as={"Fragment"}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Dialog__Headless.Overlay className="fixed inset-0" />
              </Transition__Headless.Child>
              <span className="inline-block h-screen align-middle" ariaHidden={true}>
                {React.string("&#8203;")}
              </span>
              <Transition__Headless.Child
                _as={"fragment"}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div
                  className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog__Headless.Title
                    _as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {_ => React.string("Payment successful")}
                  </Dialog__Headless.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {React.string("Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.")}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={_ => closeModal}>
                      {React.string("Got it, thanks!")}
                    </button>
                  </div>
                </div>
              </Transition__Headless.Child>
            </div>}
        </Dialog__Headless>
      </Transition__Headless>
    </>
  }
}

module Popover = {
  module IconOne = {
    @react.component
    let make = (~ariaHidden) =>
      <svg
        ariaHidden
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
  }

  module IconTwo = {
    @react.component
    let make = (~ariaHidden) =>
      <svg
        ariaHidden
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
  }
  module IconThree = {
    @react.component
    let make = (~ariaHidden) =>
      <svg
        ariaHidden
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
  }

  type items = {
    name: string,
    description: string,
    href: string,
    icon: (~ariaHidden: bool) => React.element,
  }
  let solutions = [
    {
      name: "Insights",
      description: "Measure actions your users take",
      href: "##",
      icon: (~ariaHidden) => <IconOne ariaHidden />,
    },
    {
      name: "Automations",
      description: "Create your own targeted content",
      href: "##",
      icon: (~ariaHidden) => <IconTwo ariaHidden />,
    },
    {
      name: "Reports",
      description: "Keep track of your growth",
      href: "##",
      icon: (~ariaHidden) => <IconThree ariaHidden />,
    },
  ]

  @react.component
  let make = () => {
    <div className="w-full max-w-sm px-4 fixed top-16">
      <Popover__Headless className="relative">
        {({_open, _}) => <>
          <Popover__Headless.Button
            className={`
                ${_open ? "" : "text-opacity-90"}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
            {_ => <>
              <span> {React.string("Solutions")} </span>
              <Heroicons.Solid.ChevronDownIcon
                className={`${_open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                ariaHidden={true}
              />
            </>}
          </Popover__Headless.Button>
          <Transition__Headless
            _as="div"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover__Headless.Panel
              className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              {_ =>
                <div
                  className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {React.array(
                      Js.Array2.map(solutions, item => {
                        <>
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div
                              className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                              {item.icon(~ariaHidden=true)}
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {React.string(item.name)}
                              </p>
                              <p className="text-sm text-gray-500">
                                {React.string(item.description)}
                              </p>
                            </div>
                          </a>
                        </>
                      }),
                    )}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          {React.string("Documentation")}
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        {React.string("Start integrating products and tools")}
                      </span>
                    </a>
                  </div>
                </div>}
            </Popover__Headless.Panel>
          </Transition__Headless>
        </>}
      </Popover__Headless>
    </div>
  }
}

module RadioGroup = {
  type plans = {
    name: string,
    ram: string,
    cpus: string,
    disk: string,
  }
  let plans = [
    {
      name: "Startup",
      ram: "12GB",
      cpus: "6 CPUs",
      disk: "160 GB SSD disk",
    },
    {
      name: "Business",
      ram: "16GB",
      cpus: "8 CPUs",
      disk: "512 GB SSD disk",
    },
    {
      name: "Enterprise",
      ram: "32GB",
      cpus: "12 CPUs",
      disk: "1024 GB SSD disk",
    },
  ]

  module CheckIcon = {
    @react.component
    let make = (~className="") =>
      <svg viewBox="0 0 24 24" fill="none" className>
        <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  }

  @react.component
  let make = () => {
    let (selected, setSelected) = React.useState(_ => plans[0])

    let radioArray = Js.Array2.map(plans, plan => {
      <RadioGroup__Headless.Option
        key={plan.name}
        value={plan}
        className={({active, checked, _}) =>
          `${active ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60" : ""}
          ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`}>
        {({checked, _}) => <>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="text-sm">
                <RadioGroup__Headless.Label
                  _as="p" className={`font-medium  ${checked ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </RadioGroup__Headless.Label>
                <RadioGroup__Headless.Description
                  _as="span" className={`inline ${checked ? "text-sky-100" : "text-gray-500"}`}>
                  <span> {React.string(`${plan.ram}/${plan.cpus}`)} </span>
                  {React.string(" ")}
                  <span ariaHidden={true}> {React.string("&middot;")} </span>
                  {React.string(" ")}
                  <span> {React.string(plan.disk)} </span>
                </RadioGroup__Headless.Description>
              </div>
            </div>
            {checked
              ? <div className="flex-shrink-0 text-white"> <CheckIcon className="w-6 h-6" /> </div>
              : React.null}
          </div>
        </>}
      </RadioGroup__Headless.Option>
    })

    <div className="w-full px-4 py-16">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup__Headless value={selected} onChange={val => setSelected(_ => val)}>
          <RadioGroup__Headless.Label className="sr-only">
            {React.string("Server size")}
          </RadioGroup__Headless.Label>
          <div className="space-y-2"> {React.array(radioArray)} </div>
        </RadioGroup__Headless>
      </div>
    </div>
  }
}

module Tabs = {
  type element = {
    id: int,
    title: string,
    date: string,
    commentCount: int,
    shareCount: int,
  }
  type initialState = {
    recent: array<element>,
    popular: array<element>,
    trending: array<element>,
  }

  @react.component
  let make = () => {
    let (categories, _) = React.useState(_ => {
      recent: [
        {
          id: 1,
          title: "Does drinking coffee make you smarter?",
          date: "5h ago",
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: "2h ago",
          commentCount: 3,
          shareCount: 2,
        },
      ],
      popular: [
        {
          id: 1,
          title: "Is tech making coffee better or worse?",
          date: "Jan 7",
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: "The most innovative things happening in coffee",
          date: "Mar 19",
          commentCount: 24,
          shareCount: 12,
        },
      ],
      trending: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    })
    let categories = [
      ("Recent", categories.recent),
      ("Popular", categories.popular),
      ("Trending", categories.trending),
    ]

    let catArray = Js.Array2.map(categories, category => {
      let (key, _) = category
      <Tab__Headless
        key={key}
        className={({selected}) =>
          ` w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
            ${selected
              ? "bg-white shadow"
              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"}`}>
        {_ => React.string(key)}
      </Tab__Headless>
    })

    let tabPanel = Js.Array2.map(categories, tuple => {
      let (key, posts) = tuple

      <Tab__Headless.Panel
        key={key}
        className={"bg-white rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"}>
        {_ =>
          <ul>
            {React.array(
              Js.Array2.map(posts, post => {
                <li
                  key={Belt.Int.toString(post.id)}
                  className="relative p-3 rounded-md hover:bg-coolGray-100">
                  <h3 className="text-sm font-medium leading-5"> {React.string(post.title)} </h3>
                  <ul
                    className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                    <li> {React.string(post.date)} </li>
                    <li> {React.string("&middot;")} </li>
                    <li> {React.string(`${Belt.Int.toString(post.commentCount)} comments`)} </li>
                    <li> {React.string("&middot;")} </li>
                    <li> {React.string(`${Belt.Int.toString(post.shareCount)} shares`)} </li>
                  </ul>
                  <a
                    href="#"
                    className={"absolute inset-0 rounded-md focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"}
                  />
                </li>
              }),
            )}
          </ul>}
      </Tab__Headless.Panel>
    })

    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab__Headless.Group>
        {_ => <>
          <Tab__Headless.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {_ => React.array(catArray)}
          </Tab__Headless.List>
          <Tab__Headless.Panels className="mt-2">
            {_ => React.array(tabPanel)}
          </Tab__Headless.Panels>
        </>}
      </Tab__Headless.Group>
    </div>
  }
}

module Menu = {
  module Styles = {
    open Tailwind
    let flexWrapper = twStyle([flex, itemsCenter, justifyCenter, p(#all(#12))])
    let wrapper2 = twStyle([relative, inlineBlock, textLeft])
    let buttonWrapper = twStyle([rounded(#all(#md)), shadow(#sm(#black))])
    // "transition duration-150 ease-in-out focus:shadow-outline-blue"
    let button = twStyle([
      inlineFlex,
      justifyCenter,
      w(#full),
      p(#x(#4)),
      p(#y(#2)),
      textSize(#sm),
      fontWeight(#500),
      leading(#5),
      textColor(#gray700),
      bg(#white),
      borderWidth(#all(#1)),
      borderColor(#all(#gray300)),
      rounded(#all(#md)),
      hover([textColor(#gray500)]),
      focus([outlineNone, borderColor(#all(#blue300))]),
      active([bg(#gray50), textColor(#gray800)]),
    ])
    // "-mr-1"
    let svg = twStyle([w(#5), h(#5), m(#l(#2)), m(#r(#px(-4)))])
    let items = twStyle([
      absolute,
      right(#0),
      w(#56),
      m(#t(#2)),
      originTopRight,
      bg(#white),
      borderWidth(#all(#1)),
      borderColor(#all(#gray200)),
      divide(#y(#1, #gray100)),
      rounded(#all(#md)),
      shadow(#lg(#black)),
      outlineNone,
    ])
    let itemsHeader = twStyle([p(#x(#4)), p(#y(#3))])
    let par = twStyle([textSize(#sm), leading(#5)])
    // "truncate"
    let pBold = merge(. [par, twStyle([fontWeight(#500), textColor(#gray900)])])
    let itemContainer = twStyle([p(#y(#1))])
    let itemStyles = twStyle([
      flex,
      justifyBetween,
      w(#full),
      p(#x(#4)),
      p(#y(#2)),
      textSize(#sm),
      leading(#5),
      textLeft,
    ])
    let activated = twStyle([bg(#gray100), textColor(#gray900)])
    let notActive = twStyle([textColor(#gray700)])
    let disabled = twStyle([
      flex,
      justifyBetween,
      w(#full),
      p(#x(#4)),
      p(#y(#2)),
      textSize(#sm),
      leading(#5),
      textLeft,
      textColor(#gray700),
      cursor(#notAllowed),
      opacity(#50),
    ])
  }
  @react.component
  let make = () => {
    <div className=Styles.flexWrapper>
      <div className=Styles.wrapper2>
        <Menu__Headless>
          {({_open}) => <>
            <span className=Styles.buttonWrapper>
              <Menu__Headless.Button className=Styles.button>
                {_ => <>
                  <span> {React.string("Options")} </span>
                  <svg className=Styles.svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>}
              </Menu__Headless.Button>
            </span>
            <Transition__Headless
              show={_open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu__Headless.Items static={true} className=Styles.items>
                {_ => <>
                  <div className=Styles.itemsHeader>
                    <p className=Styles.par> {React.string("Signed in as")} </p>
                    <p className=Styles.pBold> {React.string("tom@example.com")} </p>
                  </div>
                  <div className=Styles.itemContainer>
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <a
                          href="#account-settings"
                          className={Tailwind.merge(. [
                            Styles.itemStyles,
                            active ? Styles.activated : Styles.notActive,
                          ])}>
                          {React.string("Account settings")}
                        </a>}
                    </Menu__Headless.Item>
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <a
                          href="#support"
                          className={Tailwind.merge(. [
                            Styles.itemStyles,
                            active ? Styles.activated : Styles.notActive,
                          ])}>
                          {React.string("Support")}
                        </a>}
                    </Menu__Headless.Item>
                    <Menu__Headless.Item _as="span" disabled={true} className=Styles.disabled>
                      {_ => React.string("New feature soon")}
                    </Menu__Headless.Item>
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <a
                          href="#license"
                          className={Tailwind.merge(. [
                            Styles.itemStyles,
                            active ? Styles.activated : Styles.notActive,
                          ])}>
                          {React.string("License")}
                        </a>}
                    </Menu__Headless.Item>
                  </div>
                  <div className=Styles.itemContainer>
                    <Menu__Headless.Item>
                      {({active, _}) =>
                        <a
                          href="#sign-out"
                          className={Tailwind.merge(. [
                            Styles.itemStyles,
                            active ? Styles.activated : Styles.notActive,
                          ])}>
                          {React.string("Sign out")}
                        </a>}
                    </Menu__Headless.Item>
                  </div>
                </>}
              </Menu__Headless.Items>
            </Transition__Headless>
          </>}
        </Menu__Headless>
      </div>
    </div>
  }
}
