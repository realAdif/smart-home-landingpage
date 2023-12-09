import LagerAboutUsImage from '../assets/LargerAboutUs.png';
import AppleDownload from '../assets/AppleDownload.png';
import GoogleDownload from '../assets/GoogleDownload.png';

const DownloadApp = () => {
  return (
    <section className="p-3 flex flex-col md:flex-row-reverse items-center">
      <img
        src={LagerAboutUsImage}
        alt="phone image"
        className="max-w-[420px] lg:max-w-[840px] "
      />
      <div>
        <h1 className="text-neutral-grey max-w-[390px]">Download App</h1>
        <p className="text-neutral-greylight  max-w-[750px] mb-6">
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </p>
        <div className="flex justify-center gap-x-2">
          <img
            src={AppleDownload}
            alt="Apple Download Button"
            className="max-w-[120px]"
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
