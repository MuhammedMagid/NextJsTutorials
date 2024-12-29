import {Link} from "next/link";
import HubCard from "@/components/hub-card/hub-card";

const cuisines = [
  {
    header: "African Cuisine",
    description: "Explore the rich and diverse flavors of African cuisine, from spicy stews to savory grilled meats.",
    link: "/hub/african"
  },
  {
    header: "Asian Cuisine",
    description: "Discover the vibrant and varied dishes of Asia, from sushi to curries and everything in between.",
    link: "/hub/asian"
  },
  {
    header: "European Cuisine",
    description: "Indulge in the classic and contemporary flavors of Europe, from pasta to pastries.",
    link: "/hub/european"
  },
  {
    header: "Latin American Cuisine",
    description: "Experience the bold and spicy tastes of Latin America, from tacos to empanadas.",
    link: "/hub/latin-american"
  },
  {
    header: "North American Cuisine",
    description: "Enjoy the diverse and delicious dishes of North America, from burgers to poutine.",
    link: "/hub/north-american"
  },
  {
    header: "Caribbean Cuisine",
    description: "Savor the tropical and flavorful dishes of the Caribbean, from jerk chicken to plantains.",
    link: "/hub/caribbean"
  },
  {
    header: "Middle Eastern Cuisine",
    description: "Relish the aromatic and savory dishes of the Middle East, from hummus to kebabs.",
    link: "/hub/middle-eastern"
  },
  {
    header: "Oceanian Cuisine",
    description: "Taste the fresh and unique flavors of Oceania, from seafood to tropical fruits.",
    link: "/hub/oceanian"
  }
];

const Hub = () => {
  return (
    <main className="py-16 px-6 sm:px-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-yellow-400">
          Welcome to the <span className="text-orange-500">Cuisine Hub</span> 🌍
        </h1>
        <p className="text-lg sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Explore culinary delights from every corner of the globe! From savory to sweet, immerse yourself in diverse flavors, recipes, and cooking techniques. 🍲🍣
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuisines.map((cuisine, index) => (
            <div key={index} href={cuisine.link}>
                <HubCard header={cuisine.header} description={cuisine.description} link={cuisine.link} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-400">
            Join our community of passionate food lovers. Share your favorite recipes, swap cooking tips, and discover new cuisines every day! 🌮🍣🍕
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hub;