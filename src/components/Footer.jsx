const footerContent = [
  {
    title: 'CATEGORIES',
    list: [
      'Product Management',
      'Design / Creative',
      'Education & Training',
      'UI/UX Designers',
      'Development',
      'Customer Support',
    ],
  },
  {
    title: 'ABOUT',
    list: [
      'About Us',
      'Partnerships',
      'Finance Experts',
      'Project Management',
      'Product Manager',
      'The Team',
    ],
  },
  {
    title: 'Follow Us',
    list: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
  },
];
const Footer = () => {
  return (
    <section className="p-3 flex flex-col lg:flex-row">
      <div className="mr-3">
        <h2>SmartHome</h2>
        <p className="text-sm max-w-[330px] mb-3">
          Automate your entire healthcare hiring, onboarding and compliance with
          a true technology platform.
        </p>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Email"
            className="border border-neutral-grey-300 bg-neutral-white-100 p-3 rounded-lg mr-2"
          />
          <button className="border border-neutral-black min-w-[100px] p-3 rounded-md">
            Register
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full">
        {footerContent.map((footerContent, index) => (
          <div key={index}>
            <p className="text-md my-3 mb-6 font-semibold text-[#2E2E2E]">
              {footerContent.title}
            </p>
            <div>
              {footerContent.list.map((listItem, listIndex) => (
                <p
                  key={listIndex}
                  className="my-3 text-neutral-greylight hover:underline cursor-pointer"
                >
                  {listItem}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
