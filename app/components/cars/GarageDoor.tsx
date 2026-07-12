"use client";

export default function GarageDoor() {
  return (
    <div
      id="garage-door"
      className="absolute inset-0 flex items-center justify-center opacity-0"
    >
      <div className="text-center">

        <h2 className="font-black leading-none text-white uppercase text-8xl">
          Welcome
          <br />
          To The
          <br />
          Garage
        </h2>

        <p className="mt-8 text-xl text-white/60">
          Discover. Compare. Experience.
        </p>

      </div>
    </div>
  );
}