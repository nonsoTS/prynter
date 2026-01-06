import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Button from "./Button";

export default function MobileNav({
  styles = "",
  links,
}: {
  styles?: string;
  links?: { name: string; target: string }[];
}) {
  return (
    <Popover className={"relative " + styles}>
      {({ open, close }: { open: boolean; close: () => void }) => (
        <>
          <div
            className={`bg-black flex flex-col items-center justify-center w-12 h-12 rounded-full duration-300 ease-in-out ${
              open && "scale-105"
            }`}
          >
            <PopoverButton
              id="nav-icon3"
              className={`relative w-2/5 h-2/5 p-0 rounded-full ${
                open && "open"
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </PopoverButton>
          </div>

          <PopoverPanel
            anchor="bottom"
            className={`flex flex-col items-center justify-start w-full h-fit p-5 pt-10  z-50`}
          >
            <div
              className={`w-full h-full flex flex-col items-start justify-start gap-y-4 pl-5 pt-10 bg-black text-white border-2 border-white border-solid text-4xl text-bold font_bold rounded-3xl`}
            >
              {links &&
                links.map((link) => (
                  <>
                    <a
                      key={link.target}
                      href={link.target}
                      onClick={() => close()}
                    >
                      <p className={`${"text-[#D3E97A]"}`}>{link.name}</p>
                    </a>

                    <hr className="border border-white w-full" />
                  </>
                ))}

              <Button
                link="#contact"
                styles="w-5/6! block! mx-auto! mb-3"
                buttonStyles="w-full!"
                handleClick={() => close()}
              >
                Book A Call
              </Button>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
