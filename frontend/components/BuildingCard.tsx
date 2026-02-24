import React from "react";

interface BuildingCardProps {
  name: string;
  image: string;
  roomsAvailable: number;
}

const BuildingCard: React.FC<BuildingCardProps> = ({
  name,
  image,
  roomsAvailable,
}) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg">
      {/* building image */}
      <div className="relative h-80 w-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />

        {/* availability */}
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-medium text-gray-800">
            {roomsAvailable} rooms available
          </span>
        </div>
      </div>

      {/* building name */}
      <div className="absolute bottom-2 left-2 right-2 bg-[#ef6c02] p-3 rounded-lg shadow-lg">
        <h3 className="text-white font-normal text-sm leading-tight">{name}</h3>
      </div>
    </div>
  );
};

export default BuildingCard;
