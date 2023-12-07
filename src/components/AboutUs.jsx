import SmallAboutUsImage from '../assets/SmallAboutUs.png';
import SmallAboutUs2Image from '../assets/SmallAboutUs2.png';
import SmallAboutUs3Image from '../assets/SmallAboutUs3.png';

import LagerAboutUsImage from '../assets/LargerAboutUs.png';
import LagerAboutUs2Image from '../assets/LargerAboutUs2.png';
import LagerAboutUs3Image from '../assets/LargerAboutUs3.png';

const aboutUsCards = [
  {
    lagerImage: LagerAboutUsImage,
    image: SmallAboutUsImage,
    title: "Smart Home's Smart Services",
    p: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  },
  {
    lagerImage: LagerAboutUs2Image,
    image: SmallAboutUs2Image,
    title: 'What app can do to your Appliences?',
    p: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  },
  {
    lagerImage: LagerAboutUs3Image,
    image: SmallAboutUs3Image,
    title: 'Control Electric Appliences',
    p: 'Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.',
  },
];

const AboutUs = () => {
  return (
    <section className="p-3">
      <h1 className="text-neutral-grey text-center">About Us</h1>
      <div>
        {aboutUsCards.map((card, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col justify-center items-center lg:even:flex-row-reverse"
          >
            {/* image */}
            <div className="relative flex justify-center">
              {/* sm */}
              <img src={card.image} alt="#" className="relative lg:hidden" />
              {/* lg */}
              <img
                src={card.lagerImage}
                alt="#"
                className="relative max-w-[700px] hidden lg:block"
              />
              <div className="lg:hidden w-[200px] h-[120px] bg-primary rounded-xl absolute bottom-20 -z-10" />
              <div className="hidden lg:block w-[500px] h-[350px] bg-primary rounded-xl absolute bottom-40 -z-10" />
            </div>
            {/* title */}
            <div className="">
              <h1 className="max-w-[470px] text-neutral-black text-headline-base">
                {card.title}
              </h1>
              <p className=" max-w-[450px] text-neutral-greylight my-4 text-base">
                {card.p}
              </p>
              <button className=" border border-neutral-darkblue px-6 py-3 rounded-md drop-shadow-md hover:bg-neutral-darkblue hover:text-white font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
