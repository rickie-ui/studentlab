
import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'How long does it take to complete a project?',
            answer: 'The timeline depends on the complexity of your project. Simple tasks can be completed in a few hours or days, while more advanced projects may take a week or more. Let’s discuss your requirements, and I’ll give you a precise timeframe.',
            open: false
        },
        {
            question: 'Do you provide documentation and explanations for the code?',
            answer: 'Yes! I ensure that my code is well-documented, and I can also provide additional explanations or a walkthrough to help you understand how everything works. My goal is to make sure you can confidently present and modify your project if needed.',
            open: false
        },
        {
            question: 'Can you modify or improve an existing project?',
            answer: 'Absolutely! If you already have a project but need modifications, bug fixes, or improvements, I can review the code and make necessary enhancements to ensure it meets your requirements.',
            open: false
        },
        {
            question: 'How do I get started?',
            answer: 'Simply reach out to me with details about your project, including the requirements, deadlines, and any specific technologies you prefer. I’ll review your request, provide a quote, and we’ll get started right away!',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">From Concept to Code – I Build Projects That Shine!</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="tel:+1234567890" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact me</a></p>
            </div>
        </section>
    );
}

export default Faq;