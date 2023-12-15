import profileImage from '../assets/profile.png';
import profile1Image from '../assets/profile2.png';
import profile2Image from '../assets/profile3.png';
import profile3Image from '../assets/profile4.png';
import SliderNav from '../assets/slidernav.png';

const TestimonialsList = [
  {
    name: 'Cham',
    title: 'Product Designer',
    p: ' our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions',
    image: profileImage,
  },
  {
    name: 'Scopic Software',
    title: 'Custom IT Solutions Firm',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
    image: profile1Image,
  },
  {
    name: 'Russell Lee',
    title: 'Writer',
    p: 'It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.',
    image: profile2Image,
  },
  {
    name: 'Solace Engineers Inc',
    title: 'Engineering Firm',
    p: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured',
    image: profile3Image,
  },
];

const Testimonials = () => {
  return (
    <section className="p-3" id="testimonials">
      <h1 className="text-neutral-grey text-center mt-5">Testimonials</h1>
      <p className="text-neutral-greylight text-center max-w-[750px] mx-auto">
        Wisdom new and valley answer. Contented it so is discourse recommend.
        Man its upon him call mile. An pasture he himself believe ferrars
        besides cottage.
      </p>
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 max-w-[1170px] mx-auto">
        {TestimonialsList.map((list, index) => (
          <div
            key={index}
            className="bg-neutral-grey-300 my-3 p-3 hover:bg-white drop-shadow-md rounded-xl max-w-[390px]"
          >
            <p className="text-neutral-greylight text-xs italic">{list.p}</p>
            <div className="flex gap-x-1 my-2 cursor-pointer">
              <img src={list.image} alt={list.image} className="min-w-[33px]" />
              <div>
                <p className="text-xs text-neutral-lightblue font-semibold">
                  {list.name}
                </p>
                <p className="text-[12px] text-neutral-grey-200 font-semibold">
                  {list.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={SliderNav} alt="sliderNav" className="mx-auto mt-5" />
    </section>
  );
};

export default Testimonials;
