'use client';

import { useId } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

export default function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: FaqItemProps) {
  const panelId = useId();

  return (
    <div className="rounded-2xl border border-white/15">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 sm:px-8 sm:py-6 text-left focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent rounded-2xl"
        >
          <span className="font-outfit text-lg sm:text-xl text-primary-w">
            {question}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className={`shrink-0 text-primary-w transition-transform duration-300 motion-reduce:transition-none ${
              open ? 'rotate-180' : ''
            }`}
          >
            <path
              d="M5 7.5 10 12.5 15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h3>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 sm:px-8 sm:pb-6 font-plusJakartaSans text-primary-w/70 leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
