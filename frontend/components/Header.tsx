import { Search, Map, Grid, Moon } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-2 flex items-center justify-between shadow-sm h-16">
      {/* logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src={"/assets/freeRoomsLogo.png"}
          alt="Freerooms Logo"
          className="h-10 w-10"
        />
        <h1 className="text-2xl font-bold text-[#ef6c02]">Freerooms</h1>
      </div>

      {/* right buttons */}
      <div className="flex items-center gap-2">
        <button className="p-2 text-[#ef6c02] hover:bg-orange-50 transition-colors border-2 border-gray-200 rounded-md">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 text-[#ef6c02] hover:bg-orange-50 transition-colors border-2 border-gray-200 rounded-lg">
          <Grid className="w-5 h-5" />
        </button>
        <button className="p-2 text-[#ef6c02] hover:bg-orange-50 transition-colors border-2 border-gray-200 rounded-lg">
          <Map className="w-5 h-5" />
        </button>
        <button className="p-2 text-[#ef6c02] hover:bg-orange-50 transition-colors border-2 border-gray-200 rounded-lg">
          <Moon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
