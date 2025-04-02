import Emperors from "./components/Emperors";


export default function Home() {
  return (
    <div className="bg-gray-100 text-yellow-400 min-h-screen text-[#E6C200]">
      <div className="w-full bg-red-800 text-yellow-300 py-4 text-center shadow-lg">
        <h1 className="text-6xl font-bold">Roman Emperors</h1>
      </div>
      <Emperors />
    </div>
  );
}
