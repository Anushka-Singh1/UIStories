import { BsGraphUpArrow } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import Image from "../../assets/Hero/BannerHero.jpg";

type HeroShowcaseProps = {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  backgroundImage?: string;
};

export function BannerHero({
  heading = "A One Stop For All Your Buisness Needs",
  subheading = "Transform your business with new-age payment and business management solutions.",
  buttonText = "Get Started Today",
  backgroundImage = Image,
}: HeroShowcaseProps) {
  return (
    <div className="relative w-full max-w-[85%] md:max-w-[97%] mx-auto mt-8 md:mt-12 lg:mt-8 mb-[10%] md:mb-[4%] font-montserrat rounded-lg overflow-hidden">
      <div className="relative p-8 pb-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 0 }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 md:w-1/2 space-y-6 text-white mt-12">
          <h1 className="text-5xl font-bold leading-tight">
            {heading} <br />
          </h1>

          <p className="text-xl text-justify">{subheading}</p>

          <div className="flex space-x-4 mt-8">
            <button className="px-6 py-3 bg-black text-white rounded-full">
              {buttonText}
            </button>
          </div>

          <div className="flex space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer text-white">
              <BsGraphUpArrow />
              <p className="font-semibold">For Businesses</p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer text-white">
              <GiReceiveMoney />
              <p className="font-semibold">For Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
