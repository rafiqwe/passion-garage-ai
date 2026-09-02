import Link from "next/link";

export const NavLogo = () => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-white font-jetbrains-mono md:text-4xl">
          IGNITE
        </p>
        <span className="font-sora text-[10px] tracking-[0.35em] text-secondary uppercase sm:text-[10px]">
          Driven by Passion
        </span>
      </div>
    </Link>
  );
};
