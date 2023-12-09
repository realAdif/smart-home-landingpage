const Cta = () => {
  return (
    <section className=" bg-primary text-white rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between p-12">
      <div>
        <h1 className=" lg:max-w-full my-3">Subscribe to get updated</h1>
        <p className="max-w-[556px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque .
        </p>
      </div>
      <button className=" py-3 my-6 border rounded-lg min-w-[220px] min-h-[70px]">
        Get Started
      </button>
    </section>
  );
};

export default Cta;
