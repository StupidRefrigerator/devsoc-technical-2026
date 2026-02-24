import React from "react";
import BuildingCard from "../components/BuildingCard";
import buildingsData from "../data/buildings.json";

interface Building {
  name: string;
  rooms_available: number;
  building_picture?: string;
}

export default function Home() {
  const buildings = buildingsData as Building[];

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="mx-auto">
        {/* responsive grid with corresponding columns */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* for each building, get the correct image path and use it in the BuildingCard component */}
          {buildings.map((building, index) => {
            const imagePath = building.building_picture;
            const cleanImagePath = `/assets/${imagePath.substring(2)}`;

            return (
              <BuildingCard
                key={`${building.name}-${index}`}
                name={building.name}
                image={cleanImagePath}
                roomsAvailable={building.rooms_available}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
