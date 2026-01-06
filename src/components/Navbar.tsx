import Button from "./Button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const LINKS = [
    { name: "Services", target: "#services" },
    { name: "About", target: "#about" },
    { name: "Pricing", target: "#pricing" },
    { name: "Why Us", target: "#whyUs" },
    { name: "Clients", target: "#clients" },
    { name: "FAQs", target: "#faqs" },
    { name: "Contact Us", target: "#contact" },
  ];

  return (
    <div className="animate__animated animate__fadeInDown fixed top-2 lg:top-5 left-0 right-0 z-999 bg-transparent">
      <div className="relative mx-2 lg:mx-auto w-auto lg:w-3/4 rounded-full border-4 lg:border-8 border-[#E5E5E5] flex justify-between items-center px-6 py-2 lg:py-3 bg-white -z-10">
        <a href="#home" className="flex items-center">
          <img
            src="/images/Pryntar.svg"
            alt="Pryntar logo"
            className="w-14 lg:w-19.5 h-auto"
          />
        </a>

        <div className="hidden lg:flex flex-row items-center justify-between gap-x-6 font-medium text-sm">
          {LINKS.map((link) => (
            <a key={link.target} href={link.target}>
              {link.name}
            </a>
          ))}
        </div>

        <Button
          link="#contact"
          styles="hidden! lg:block!"
          buttonStyles="p-full! lg:p-fit! text-[10px]! lg:text-[16px]!"
        >
          Book A Call
        </Button>

        <MobileNav links={LINKS} styles="block! lg:hidden!" />
      </div>
    </div>
  );
};

export default Navbar;
