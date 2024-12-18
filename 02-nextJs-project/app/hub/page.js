import Link from "next/link"; 
import style from "./hub.module.css"; // Optional, for additional styling
import HubCard from "@/components/hub-card/hub-card";

const Hub = () => {
  return (
    <main className="py-16 px-6 sm:px-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white m">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-yellow-400">
          Welcome to the <span className="text-orange-500">Cuisine Hub</span> 🌍
        </h1>
        <p className="text-lg sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Explore culinary delights from every corner of the globe! From savory to sweet, immerse yourself in diverse flavors, recipes, and cooking techniques. 🍲🍣
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <HubCard  header="Asian Cuisine" description="Vibrant, flavorful, and full of variety. Discover recipes from China, Japan, India, and beyond!" link="/hub/asian"/>
          <HubCard  header="Mediterranean Flavors" description="Healthy, fresh, and aromatic dishes full of love. From Greece to Morocco, find your new favorite dish." link="/hub/mediterranean"/>
          <HubCard  header="Indian Cuisine" description="Spice, flavors, and a rich heritage. From the vibrant streets of India, discover the rich culinary heritage of this country." link="/hub/indian"/>

          <HubCard  header="Mediterranean Flavors" description="Healthy, fresh, and aromatic dishes full of love. From Greece to Morocco, find your new favorite dish." link="/hub/mediterranean"/>
          <HubCard  header="Latin American Spice" description="Bold, spicy, and full of zest. Journey through Latin American kitchens with recipes from Mexico, Brazil, and more." link="/hub/latin-american"/>

          <HubCard  header="Mediterranean Flavors" description="Healthy, fresh, and aromatic dishes full of love. From Greece to Morocco, find your new favorite dish." link="/hub/mediterranean"/>
          <HubCard  header="Latin American Spice" description="Bold, spicy, and full of zest. Journey through Latin American kitchens with recipes from Mexico, Brazil, and more." link="/hub/latin-american"/>

          <HubCard  header="Mediterranean Flavors" description="Healthy, fresh, and aromatic dishes full of love. From Greece to Morocco, find your new favorite dish." link="/hub/mediterranean"/>
          <HubCard  header="Latin American Spice" description="Bold, spicy, and full of zest. Journey through Latin American kitchens with recipes from Mexico, Brazil, and more." link="/hub/latin-american"/>

          <HubCard  header="Mediterranean Flavors" description="Healthy, fresh, and aromatic dishes full of love. From Greece to Morocco, find your new favorite dish." link="/hub/mediterranean"/>
          <HubCard  header="Latin American Spice" description="Bold, spicy, and full of zest. Journey through Latin American kitchens with recipes from Mexico, Brazil, and more." link="/hub/latin-american"/>
          
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
