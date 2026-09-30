'use client';

import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import FaqItem from '@/components/home/FaqItem';

type QA = { question: string; answer: string };

// Placeholder answers — swap for real copy when ready.
const FAQS: QA[] = [
  {
    question: 'Is Code & Create Bootcamp really 100% free?',
    answer:
      'Yes. The bootcamp is fully funded, so there are no tuition fees at any point in the programme. Our goal is to remove cost as a barrier to learning tech skills.',
  },
  {
    question: 'Do I need prior coding or design experience to apply?',
    answer:
      'No prior experience is required. We look for curiosity and commitment more than existing skills — the curriculum is built to take beginners from the fundamentals up.',
  },
  {
    question: 'What is the weekly time commitment?',
    answer:
      'Most beneficiaries spend around 10–15 hours a week on classes, assignments, and project work, though this can vary depending on the track and stage of the programme.',
  },
  {
    question: 'What hardware or equipment do I need?',
    answer:
      "A laptop capable of running a modern browser and code editor, along with a stable internet connection, is required. We share the full minimum spec once you're accepted.",
  },
  {
    question: 'How does the Cohort 2 application process work?',
    answer:
      'Applications open with a short form covering your background and motivation, followed by a brief screening interview. Selected applicants are notified ahead of the cohort start date.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-4xl w-full px-6 py-20">
        <Reveal className="text-center">
          <span className="text-accent uppercase tracking-wider text-xs font-semibold font-plusJakartaSans">
            Common questions
          </span>
        </Reveal>

        <Reveal delay={100} className="text-center">
          <h2 className="mt-4 font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-w">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={220 + i * 70} y={16}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
