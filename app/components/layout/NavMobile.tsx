import { ArrowRight } from "lucide-react";

interface NavMobileProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: { label: string; href: string }[];
}

export const NavMobile = ({ isOpen, setIsOpen, navItems }: NavMobileProps) => {
  return (
    <div
      className={`fixed inset-0 top-24 z-40 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-xl tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:text-gray-400"
          >
            {item.label}
          </a>
        ))}

        <button
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 mt-4 text-lg  underline group underline-offset-4 cursor-pointer hover:text-primary after:bg-accent relative text-[16px] tracking-[0.2em] text-white uppercase transition-colors duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full"
        >
          Explore
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};
