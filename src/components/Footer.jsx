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
    <section className="p-3">
      <div className="max-w-[330px]">
        <h2>SmartHome</h2>
        <p className="text-sm">
          Automate your entire healthcare hiring, onboarding and compliance with
          a true technology platform.
        </p>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Email"
            className="border p-3 rounded-lg mr-2"
          />
          <button className="border min-w-[100px] p-3 rounded-md">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
