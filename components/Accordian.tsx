import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

type AccordionItem = [string, string];

interface AccordionProps {
  data: AccordionItem[];
}

// Button component
const AccordionButton: React.FC<{ question: string; isOpen: boolean }> = ({
  question,
  isOpen,
}) => (
  // Button for each accordion item
  <Disclosure.Button className="w-full flex items-center justify-between text-bold text-green-500 bg-green-50 py-2 px-4 rounded-md hover:bg-green-100 focus-visible:ring focus-visible:ring-green-200 focus-visible:ring-opacity-75 ease-in-out duration-100">
    <span className="mr-2">{question}</span>
    <ChevronRightIcon
      className={`color-green-500 h-4 w-4 transition-transform duration-300 ${
        isOpen ? "rotate-90" : ""
      }`}
    />
  </Disclosure.Button>
);

// Panel component
const AccordionPanel: React.FC<{ content: string }> = ({ content }) => (
  // Transition animation for panel content
  <Transition
    enter="transition duration-50 ease-out"
    enterFrom="transform opacity-0"
    enterTo="transform opacity-100"
    leave="transition duration-50 ease-out"
    leaveFrom="transform opacity-100"
    leaveTo="transform opacity-0"
  >
    <Disclosure.Panel className="w-full py-2 px-4">{content}</Disclosure.Panel>
  </Transition>
);

const Accordion: React.FC<AccordionProps> = ({ data }) => (
  <div className="my-4 mb-5 w-full px-4 ease-in-out duration-100">
    <div className="mx-auto w-2/3 max-w rounded-xl bg-white p-2 shadow-2xl shadow-stone-500">
      {data.map(([question, content], index) => (
        <Disclosure key={index}>
          {({ open }) => (
            // Render each accordion item
            <>
              <AccordionButton question={question} isOpen={open} />
              <AccordionPanel content={content} />
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);

export default Accordion;
