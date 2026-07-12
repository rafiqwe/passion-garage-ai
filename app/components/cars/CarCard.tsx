import Image from "next/image";

interface Props {
  car: {
    name: string;
    year: string;
    hp: string;
    speed: string;
    top: string;
    image: string;
  };
}

export default function CarCard({ car }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#101010] p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40">

      {/* Glow */}
      <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent group-hover:opacity-100" />

      {/* Image */}
      <div className="relative mb-8 h-60">

        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-contain transition duration-700 group-hover:scale-110"
        />

      </div>

      <span className="text-sm uppercase tracking-[0.3em] text-white/40">
        {car.year}
      </span>

      <h3 className="mt-3 text-3xl font-black text-white">
        {car.name}
      </h3>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div>
          <p className="text-xs uppercase text-white/40">
            HP
          </p>
          <h4 className="text-xl font-bold">
            {car.hp}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase text-white/40">
            0-100
          </p>
          <h4 className="text-xl font-bold">
            {car.speed}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase text-white/40">
            Top
          </p>
          <h4 className="text-xl font-bold">
            {car.top}
          </h4>
        </div>

      </div>

    </div>
  );
}