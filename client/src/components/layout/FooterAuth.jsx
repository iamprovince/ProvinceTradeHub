const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-0 w-full bg-transparent text-sm text-text-light text-center py-2 flex justify-center flex-col items-center space-y-0.5'>
      © {new Date().getFullYear()} Province Trade Hub
      <br /> All rights reserved.
    </footer>
  );
};

export default Footer;
