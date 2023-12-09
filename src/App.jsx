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
import Email from './components/Email';

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
            <img
              src={HeroLinesImage}
              alt="Lines"
              className="absolute right-24 -bottom-40 hidden lg:block "
            />
            <img
              src={HeroFrameImage}
              alt="Hero Background Frame"
              className="absolute lg:block top-0 hidden "
            />
            <img
              src={SmallHeroImage}
              alt="Phones"
              className="absolute -bottom-24 lg:hidden mx-auto"
            />
            <img
              src={LargeHeroImage}
              alt="Phones"
              className="absolute -bottom-72 hidden lg:block max-w-[1084px]"
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
      <main className="container mx-auto mt-12">
        <AboutUs />
        <Clients />
        <Testimonials />
        <Faq />
        <DownloadApp /> {/* need to fix the image oversize */}
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default App;
