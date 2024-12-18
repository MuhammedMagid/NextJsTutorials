import Link from "next/link";

const HubCard = ({ header, description, link }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-orange-800 hover:text-black transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4 text-yellow-300">{header}</h3>
      <p className="text-gray-400">{description}</p>
      <Link href={link} className="mt-4 inline-block text-yellow-400 hover:underline">Explore {header} Cuisine</Link>
    </div>
  );
};


export default HubCard;