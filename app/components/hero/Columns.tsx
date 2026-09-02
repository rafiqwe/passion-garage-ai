import Image from "next/image";
import React from "react";

interface ColumnsProps {
  col: string[];
}

export const Columns = ({ col }: ColumnsProps) => {
  return (
    <div className="flex flex-col flex-1 h-full gap-2 col">
      {col.map((media) => {
        return media.endsWith(".mp4") ? (
          <div key={media} className="relative flex-1 overflow-hidden item">
            <video
              src={media}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 object-cover w-full h-full transform scale-125"
            />
          </div>
        ) : (
          <div key={media} className="relative flex-1 overflow-hidden item">
            <Image
              fill
              sizes="(max-width: 1000px) 33vw, 15vw"
              alt=""
              src={media}
              className="relative object-cover transform scale-125"
            />
          </div>
        );
      })}
    </div>
  );
};
