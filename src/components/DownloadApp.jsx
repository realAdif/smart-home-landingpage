import LagerAboutUsImage from '../assets/LargerAboutUs.png';
import SmallAboutUs from '../assets/SmallAboutUs.png';
import AppleDownload from '../assets/AppleDownload.png';
import GoogleDownload from '../assets/GoogleDownload.png';

const DownloadApp = () => {
  return (
    <section className="p-3 flex flex-col md:flex-row-reverse justify-center items-center">
      <img src={SmallAboutUs} alt="#" className="relative lg:hidden" />
      {/* lg */}
      <img
        src={LagerAboutUsImage}
        alt="#"
        className="relative max-w-[700px] hidden lg:block"
      />
      <div className="p-3">
        <h1 className="max-w-[470px] text-neutral-black text-headline-base lg:text-headline-lg">
          Download App
        </h1>
        <p className=" max-w-[450px] text-neutral-greylight my-4 text-base">
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>
        <div className="flex">
          <img
            src={AppleDownload}
            alt="Apple Download Button"
            className="max-w-[126px]"
          />
          <img
            src={GoogleDownload}
            alt="Google Download Button"
            className="max-w-[126px]"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
