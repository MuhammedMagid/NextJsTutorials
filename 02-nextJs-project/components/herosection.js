import Link from "next/link"; 

// components/HeroSection.js
const HeroSection = () => {
  return (
    <section className="py-16 px-6 sm:px-12  text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Welcome to <span className="text-yellow-300">Foodie Haven</span> 🍽️
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          A vibrant community where food lovers like you discover mouthwatering recipes, share cooking hacks, and celebrate all things delicious. 🍳🍰
        </p>

        <div className="flex justify-center mb-8 space-x-4">
          <Link
            href="/dishes"
            className="bg-white text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transform transition-all duration-300 ease-in-out"
          >
            Explore Dishes
          </Link>
          <Link
            href="/hub"
            className="bg-white text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transform transition-all duration-300 ease-in-out"
          >
            Discover Cuisines
          </Link>
        </div>

        <p className="text-sm text-gray-200 mt-4">
          Join our global food family today and let your culinary adventure begin! 🌍🍴
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
