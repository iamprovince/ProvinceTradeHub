import { Card, CardBody, Typography } from "@material-tailwind/react";
import { PhoneIllustration } from "../../../assets/utilities";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CreditCardIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { supportIcon } from "../../../assets/icons";
import { fadeIn, staggerFadeIn } from "../../../assets/gsap";

const features = [
  {
    icon: <ArrowTrendingUpIcon className='w-5 h-5' />,
    title: "Powerful Trading Platforms",
    description:
      "Our company offers multiple platform options to cover the needs of each type of trader and investors.",
  },
  {
    icon: <CreditCardIcon className='w-5 h-5' />,
    title: "High leverage",
    description:
      "Chance to magnify your investment and really win big with super-low spreads to further up your profits.",
  },
  {
    icon: <BoltIcon className='w-5 h-5' />,
    title: "Fast execution",
    description: "Super-fast trading software, so you never suffer slippage.",
  },
  {
    icon: <ShieldCheckIcon className='w-5 h-5' />,
    title: "Ultimate Security",
    description: "With advanced security systems, we keep your account always protected.",
  },
  {
    icon: <span className='w-5 h-5 scale-125'>{supportIcon}</span>,
    title: "24/7 live chat Support",
    description: "Connect with our 24/7 support and Market Analyst on-demand.",
  },
];

const ServicesSection = () => {
  staggerFadeIn(".gsapServices");
  fadeIn(".gsap");
  return (
    <section className='overflow-hidden bg-primary-default min-h-screen'>
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center mb-8 gsap'>
          <Typography variant='h4' className='mb-4 text-text-light'>
            Explore Our Services
          </Typography>
          <Typography variant='paragraph' className='text-gray-600 max-w-xl mx-auto'>
            It’s our mission to provide you with a delightful and a successful trading experience!
          </Typography>
        </div>

        <div className='flex flex-wrap justify-center items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='p-4 shadow-md gsapServices'
                variant='gradient'
                color='gray'>
                <CardBody className='flex items-start'>
                  <div className='flex-shrink-0 mr-4'>
                    <div className='w-12 h-12 flex items-center justify-center bg-accent rounded-full text-text-light'>
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <Typography variant='h6' className='mb-2 text-text-light'>
                      {feature.title}
                    </Typography>
                    <Typography variant='paragraph' className='text-gray-600'>
                      {feature.description}
                    </Typography>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className='mt-8 lg:mt-0 lg:ml-8 gsapServices'>
            <img src={PhoneIllustration} alt='Phone App' className='max-w-xs mx-auto' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
