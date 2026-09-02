interface NavDesktopProps {
  navItems: { label: string; href: string }[];
}
export const NavDesktop = ({ navItems }: NavDesktopProps) => {
  return (
    <div className="items-center hidden gap-10 md:flex">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="hover:text-primary after:bg-accent relative text-[16px] tracking-[0.2em] text-white uppercase transition-colors duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all hover:after:w-full"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
