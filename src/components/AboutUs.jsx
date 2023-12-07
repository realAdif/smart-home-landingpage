import SmallAboutUsImage from '../assets/SmallAboutUs.png';

const aboutUsCards = [
  {
    image: SmallAboutUsImage,
    title: "Smart Home's Smart Services",
    p: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  },
  {
    image: SmallAboutUsImage,
    title: "Smart Home's Smart Services",
    p: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  },
  {
    image: SmallAboutUsImage,
    title: "Smart Home's Smart Services",
    p: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  },
];

const AboutUs = () => {
  return (
    <section className="p-3">
      <h1 className="text-neutral-grey text-center">About Us</h1>
      {aboutUsCards.map((card, index) => (
        <div key={index}>
          <div className="relative flex justify-center">
            <img src={card.image} alt="#" className="relative" />
            <div className="w-[200px] h-[120px] bg-primary rounded-xl absolute bottom-20 -z-10" />
          </div>

          <h1 className="text-neutral-black">{card.title}</h1>
          <p className="text-neutral-greylight my-4">{card.p}</p>
          <button className=" border border-neutral-darkblue px-6 py-3 rounded-md drop-shadow-md hover:bg-neutral-darkblue hover:text-white font-semibold">
            Learn More
          </button>
        </div>
      ))}
    </section>
  );
};

export default AboutUs;
