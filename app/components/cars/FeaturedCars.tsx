import CarCard from "./CarCard";
import { cars } from "./carData";

export default function FeaturedCars() {
  return (
    <section className="bg-[#050505] py-40">

      <div className="px-6 mx-auto max-w-7xl">

        <p className="mb-6 uppercase tracking-[0.35em] text-cyan-400">
          Featured Collection
        </p>

        <h2 className="max-w-4xl text-6xl font-black leading-none text-white uppercase md:text-8xl">
          Machines
          <br />
          That Changed
          <br />
          History.
        </h2>

        <div className="grid gap-10 mt-24 lg:grid-cols-2">

          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}

        </div>

      </div>

    </section>
  );
}