import Button from "./Button";

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
    <div className="fixed top-5 left-0 right-0 z-999">
      <div className="relative mx-auto w-3/4 rounded-full border-8 border-[#E5E5E5] flex justify-between items-center py-3 px-6 bg-white -z-10">
        <div>
          <img
            src="/images/Prynter.svg"
            alt="Prynter logo"
            className="w-19.5 h-auto"
          />
        </div>

        <div className="flex flex-row items-center justify-between gap-x-6 font-medium text-sm">
          {LINKS.map((link) => (
            <a key={link.target} href={link.target}>
              {link.name}
            </a>
          ))}
        </div>

        <Button>Book A Call</Button>
      </div>
    </div>
  );
};

export default Navbar;
