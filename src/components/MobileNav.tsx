import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function MobileNav({ styles = "" }: { styles?: string }) {

  return (
    <Popover className={"relative " + styles}>
      {({ open } : { open: boolean }) => (
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
            className={`flex flex-col items-center justify-start w-full h-full p-3 pt-10  z-50`}
          >
            <div
              className={`w-full h-full flex flex-col items-start justify-start gap-y-4 pl-5 pt-10 bg-black text-white border-2 border-white border-solid text-4xl text-bold font_bold rounded-3xl`}
            >
              <a href={"/"}>
                <p className={`${"text-[#D3E97A]"}`}>
                  Home
                </p>
              </a>

              <hr className="border border-white w-full" />

              <a href={"/about"}>
                <p className={`${"text-[#D3E97A]"}`}>
                  About
                </p>
              </a>

              <hr className="border border-white w-full" />

              <a href={"/projects"}>
                <p
                  className={`${"text-[#D3E97A]"}`}
                >
                  Projects
                </p>
              </a>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
