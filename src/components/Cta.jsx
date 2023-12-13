import Decoratorblue3 from '../assets/Decorator3.png';

const Cta = () => {
  return (
    <section className="bg-primary relative text-white rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between p-12 mb-24">
      <div>
        <h1 className=" lg:max-w-full my-3 text-headline-samllScreen">
          Subscribe to get updated
        </h1>
        <p className="max-w-[556px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque .
        </p>
      </div>
      <button className=" py-3 my-6 ml-3 border rounded-md min-w-[220px] min-h-[70px] hover:bg-white hover:text-primary font-semibold">
        Get Started
      </button>
      <img src={Decoratorblue3} alt="" className="absolute bottom-0 right-6" />
      <img src={Decoratorblue3} alt="" className="absolute bottom-0 right-6" />
    </section>
  );
};

export default Cta;
