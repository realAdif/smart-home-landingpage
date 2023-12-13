import cybexLogo from '../assets/cybexLogo.png';
import FitnessLogo from '../assets/Fitnesslogo.png';
import LifeLogo from '../assets/LifeLogo.png';
import MockLogo from '../assets/MockLogo.png';
import precorLogo from '../assets/precorLogo.png';
import SmileLogo from '../assets/SmileLogo.png';
import TravelLogo from '../assets/TravelLogo.png';
import TrueLogo from '../assets/TrueLogo.png';

const logoList = [
  TravelLogo,
  FitnessLogo,
  LifeLogo,
  SmileLogo,
  TrueLogo,
  cybexLogo,
  MockLogo,
  precorLogo,
];

const Clients = () => {
  return (
    <section className="p-3 mt-6">
      <div className="max-w-[750px] mx-auto text-center">
        <h1 className="text-neutral-grey">Our Clients</h1>
        <p className="text-neutral-greylight">
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-x-4 gap-y-5 mt-6 ">
        {logoList.map((logo, index) => (
          <div
            key={index}
            className="max-w-[185px]  bg-white p-4 drop-shadow-md rounded-lg"
          >
            <img src={logo} alt={logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
