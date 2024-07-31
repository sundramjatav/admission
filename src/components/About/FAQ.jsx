import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Do you offer support for international students?",
        answer:
            "Absolutely. We offer tailored services to meet the unique needs of international students, including visa assistance and accommodation arrangements.",
    },
    {
        question: "Can you help with scholarships and financial aid?",
        answer:
            "Yes, we provide guidance on available scholarships and assist with financial planning to support your education.",
    },
    {
        question: "What documents are required for the admission process?",
        answer:
            "Generally, you'll need academic transcripts, entrance exam scores, identification proofs, and other relevant documents. provide a detailed checklist based on your chosen course and institution.",
    },
    {
        question: "How do I choose the right medical course for me?",
        answer:
            "Our expert counselors will help you assess your interests, strengths, and career goals to recommend the best course.",
    },
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full px-2 md:px-0">
            <div>
                <div className="w-full space-y-4 md:mt-16">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="cursor-pointer rounded border border-gray-200 shadow-sm transition-all duration-200"
                        >
                            <button
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                onClick={() => handleToggle(index)}
                            >
                                <span className="flex text-lg font-semibold text-start text-black">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                            {activeIndex === index && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p className="text-gray-500 text-start">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
