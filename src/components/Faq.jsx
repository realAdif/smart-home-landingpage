import { useState } from 'react';
import plusIcon from '../assets/plus.svg';
import minusIcon from '../assets/minus.svg';

const faqList = [
  {
    title: 'Chamber reached do he nothing be?',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
  },
  {
    title: 'Stuff sight equal of my woody?',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
  },
  {
    title: 'At by pleasure of children be?',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
  },
  {
    title: 'Amounted repeated as believed in confined?',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
  },
  {
    title: 'In am do giving to afford parish settle easily garret?',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
  },
];

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="p-3">
      <h1 className="text-neutral-grey text-center my-6">FAQ's</h1>
      <div className="flex flex-col items-center gap-y-4">
        {faqList.map((list, index) => (
          <div
            key={index}
            className={`
            bg-${
              expandedIndex === index
                ? 'white drop-shadow-md'
                : 'neutral-white-100'
            } min-w-[390px] max-w-[390px] lg:min-w-[670px] lg:max-w-[670px] py-3 px-3 lg:px-6 rounded-lg `}
            onClick={() => handleToggle(index)}
          >
            <div className="flex gap-x-3">
              <img
                src={expandedIndex === index ? minusIcon : plusIcon}
                alt="toggle Icon"
              />

              <p className="text-sm">{list.title}</p>
            </div>

            {expandedIndex === index && (
              <p className="text-sm ml-8 mt-3">{list.p}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
