import { LaptopIllustration } from "../../assets/utilities";
import { Link } from "react-router-dom";
import EURTicker from "./subComponents/Tradeview/EURTicker";
import BTCUSDTicker from "./subComponents/Tradeview/BTCUSDTicker";
import ETHUSDTicker from "./subComponents/Tradeview/ETHUSDTicker";
import { fadeIn, slideIn } from "../../assets/gsap";
const MobileTradingSection = () => {
  slideIn(".gsapAlwaysLaptop");
  slideIn(".gsapAlways", { x: 200 });
  fadeIn(".gsapTicker");
  return (
    <section className='bg-inherit lg:px-20 px-4 text-center md:text-start'>
      <div className='flex flex-row justify-between mt-5 gsapTicker'>
        <EURTicker />
        <BTCUSDTicker />
        <ETHUSDTicker />
      </div>
      <div className='container my-20'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full md:w-1/2'>
            <img
              src={LaptopIllustration}
              className='w-full h-auto gsapAlwaysLaptop'
              alt='Laptop showing trading platform'
            />
          </div>
          <div className='w-full mt-4 md:mt-0 md:pt-0 md:w-1/2'>
            <div className='ml-0 md:ml-5 gsapAlways'>
              <h4 className='mb-4 text-lg font-semibold'>
                Always on the go? Mobile trading is easier than ever with our trading platform!
              </h4>
              <p className='text-muted gsapAlways'>
                Get your hands on our customized Trading Platform with the comfort of freely trading
                on the move, to experience truly liberating trading sessions.
              </p>
              <Link to='./about' className='accent-btn inline-block mt-8 !px-4'>
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTradingSection;
