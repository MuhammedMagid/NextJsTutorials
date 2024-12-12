import Link from "next/link";

// components/HeroSection.js
const HeroSection=()=> {
  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Foodie Haven</h1>
        <p className="text-lg mb-8">A platform for food enthusiasts to explore recipes, cooking tips and share their culinary experiences.</p>

        <div className="flex justify-center mb-8">
          <Link href="/dishes" className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-full shadow-lg mr-4">
            Browse Dishes
          </Link>
          <Link href="/hub" className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-full shadow-lg">
            Discover Cuisines
          </Link>
        </div>

        <p className="text-sm text-gray-400">Join our community today and start exploring the world of food!</p>
      </div>
    </section>
  );
}

  
  export default HeroSection;