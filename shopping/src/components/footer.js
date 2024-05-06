import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiYoutube,
    FiInstagram,
  } from "react-icons/fi";
  
  const socialLinks = [
    {
      id: 1,
      icon: <FiInstagram />,
    },
    {
      id: 2,
      icon: <FiGithub />,
    },
    {
      id: 3,
      icon: <FiTwitter />,
    },
    {
      id: 4,
      icon: <FiLinkedin />,
    },
    {
      id: 5,
      icon: <FiYoutube />,
    },
  ];
  
  const Footer = () => {
    return (
      <div className="contain mx-auto top">
        <div className="pt-20 sm:pt-30 pb-8 mt-20">
          {/* Footer social links */}
          <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <div className="mb-50">
            <h1 className="text-xl">
                Made with ❤️ by <a href="https://vardhan077.github.io/Portfolio/" target="_blank"><span className=" text-pink-600 hover:font-bold">Vardhan Marriwada</span></a>
            </h1>
        </div>
            <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5 mt-7">
              Follow me
            </p>
            <ul className="flex gap-4 sm:gap-8">
              {socialLinks.map((link) => (
                <a
                  href=""
                  target="__blank"
                  key={link.id}
                  className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Footer;