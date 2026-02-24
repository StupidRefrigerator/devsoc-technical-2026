import React from "react";
import { Filter, Search, ListFilter } from "lucide-react";

const FilterSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-30 mb-6">
      {/* filters button */}
      <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#ef6c02] rounded-lg text-[#ef6c02] font-medium  w-full md:w-auto justify-center">
        <Filter className="w-5 h-5" />
        Filters
      </button>

      {/* search bar */}
      <div className="relative flex-grow w-full">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a building..."
          className="block w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6c02] focus:border-transparent text-gray-700"
        />
      </div>

      {/* sort button */}
      <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#ef6c02] rounded-lg text-[#ef6c02] font-medium  w-full md:w-auto justify-center">
        <ListFilter className="w-5 h-5" />
        Sort
      </button>
    </div>
  );
};

export default FilterSection;
