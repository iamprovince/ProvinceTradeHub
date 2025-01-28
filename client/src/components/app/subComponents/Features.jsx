import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { KeyIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import TickerTape from "./Tradeview/TickerTape";
import { staggerFadeIn } from "../../../assets/gsap";
const CustomCard = ({ icon, title, description }) => (
  <div className='col col-12 lg:col-4 py-4 max-w-[30rem] gsapfeatures'>
    <Card className='rounded-lg text-center shadow-md' variant='gradient' color='gray'>
      <CardBody>
        <div className='p-3 shadow bg-accent rounded inline-block'>{icon}</div>
        <div className='mt-4'>
          <Typography variant='h5' className='text-text-light'>
            {title}
          </Typography>
          <Typography variant='paragraph' className='mt-3 text-text-light'>
            {description}
          </Typography>
        </div>
      </CardBody>
    </Card>
  </div>
);
const FeaturesSection = () => {
  staggerFadeIn(".gsapfeatures");
  const cardsData = [
    {
      icon: <ShieldCheckIcon className='w-10 h-10' />,
      title: "Security",
      description:
        "We use the highest levels of Internet Security, secured by 256-bit SSL encryption to ensure your information is protected from fraud.",
    },
    {
      icon: <KeyIcon className='w-10 h-10' />,
      title: "Two Factor Auth",
      description:
        "Two-factor authentication (2FA) is enabled by default on all user accounts to securely protect against unauthorized access.",
    },
  ];

  return (
    <section className='bg-inherit py-10 min-h-screen'>
      <TickerTape />
      <div className='container mx-auto px-4 mt-[25dvh]'>
        <div className='text-center mb-8'>
          <h4 className='text-2xl font-bold text-text-light gsapfeatures'>Security Comes First</h4>
        </div>
        <div className='flex flex-col md:flex-row justify-evenly gap-8'>
          {cardsData.map((card, index) => (
            <CustomCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
CustomCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default FeaturesSection;
