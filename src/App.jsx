import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import DownloadApp from './components/DownloadApp';
import Cta from './components/Cta';
import Footer from './components/Footer';

import HeroFrameImage from './assets/HeroFrame.png';
import HeroLinesImage from './assets/HeroLines.png';
import SmallHeroImage from './assets/SmallHeroImage.png';
import LargeHeroImage from './assets/LargeHeroImage.png';
import AppleDownload from './assets/AppleDownload.png';
import GoogleDownload from './assets/GoogleDownload.png';
import twitterIcon from './assets/Twitter.svg';
import instagramIcon from './assets/Instagram.svg';
import linkedinIcon from './assets/LinkedIn.svg';
import facebookIcon from './assets/Facebook.svg';
import line from './assets/Line.png';
import Samllline from './assets/SmallLine.png';
import Decorator1 from './assets/Decorator1.png';
import Decorator2 from './assets/Decorator2.png';
import Decoratorblue1 from './assets/Decoratorblue1.png';

function App() {
  return (
    <>
      <div className="relative h-fit mx-auto lg:mb-64 mb-24">
        <main className="bg-primary  pb-24 lg:pb-60 ">
          <section className="container mx-auto">
            <Navbar />
            <Hero />
          </section>

          <div className="w-full flex justify-center container mx-auto">
            <div className="lg:flex flex-col gap-y-10 absolute left-12  hidden">
              <img src={facebookIcon} alt="Facbook Icon" />
              <img src={instagramIcon} alt="Instagram Icon" />
              <img src={twitterIcon} alt="Twitter Icon" />
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </div>

            <img
              src={HeroLinesImage}
              alt="Lines"
              className="absolute right-24 -bottom-40 hidden lg:block "
            />
            <img
              src={HeroFrameImage}
              alt="Hero Background Frame"
              className="absolute lg:block z-10 top-0 hidden pointer-events-none "
            />
            <img
              src={SmallHeroImage}
              alt="Phones"
              className="absolute -bottom-24 lg:hidden mx-auto pointer-events-none"
            />
            <img
              src={LargeHeroImage}
              alt="Phones"
              className="absolute -bottom-72 hidden lg:block max-w-[1084px] pointer-events-none"
            />
          </div>
        </main>
      </div>
      {/* apple and google Download button */}
      <div className="flex justify-center gap-x-8">
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
      <main className="container mx-auto mt-12 relative overflow-x-clip bg-white">
        <img
          src={Samllline}
          alt="LinkedIn Icon"
          className="absolute  -top-48 right-0 -z-50 lg:hidden"
        />
        <img
          src={line}
          alt="LinkedIn Icon"
          className="absolute -top-48 -right-24 -z-50 hidden lg:block "
        />
        <img
          src={Decorator1}
          alt="Decorator"
          className="absolute left-0 lg:block hidden"
        />
        <AboutUs />
        <img
          src={Decorator2}
          alt="Decorator"
          className="absolute right-0 lg:block hidden"
        />
        <Clients />
        <div className="relative">
          <img
            src={line}
            alt="LinkedIn Icon"
            className="absolute top-24 -right-12 -z-50 hidden lg:block "
          />
          <Testimonials />
          <Faq />
          <img
            src={Decoratorblue1}
            alt=""
            className="absolute left-0 bottom-3 -z-50 hidden lg:block"
          />
        </div>
        <DownloadApp /> {/* need to fix the image oversize */}
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default App;
