import Button from "./Button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const LINKS = [
    { name: "Services", target: "#services" },
    { name: "About", target: "#about" },
    { name: "Pricing", target: "#pricing" },
    { name: "Clients", target: "#clients" },
    { name: "Why Us", target: "#why-us" },
    { name: "Team", target: "#team" },
    { name: "FAQs", target: "#faqs" },
  ];

  return (
    <div className="fixed top-2 lg:top-5 left-0 right-0 z-999">
      <div className="relative mx-2 lg:mx-auto w-auto lg:w-3/4 rounded-full border-4 lg:border-8 border-[#E5E5E5] flex justify-between items-center px-6 py-2 lg:py-3 bg-white -z-10">
        <div>
          <img
            src="/images/Prynter.svg"
            alt="Prynter logo"
            className="w-14 lg:w-19.5 h-auto"
          />
        </div>

        <div className="hidden lg:flex flex-row items-center justify-between gap-x-6 font-medium text-sm">
          {LINKS.map((link) => (
            <a key={link.target} href={link.target}>
              {link.name}
            </a>
          ))}
        </div>

        <Button styles="hidden! lg:block!" buttonStyles="p-full! lg:p-fit! text-[10px]! lg:text-[16px]!">Book A Call</Button>

        <MobileNav styles="block! lg:hidden!" />
      </div>
    </div>
  );
};

export default Navbar;
