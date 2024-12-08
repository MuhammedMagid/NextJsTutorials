// components/HeroSection.js
const HeroSection=()=> {
    return (
      <section className=" text-white py-16 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Foodie Haven</h1>
          <p className="text-lg mb-8">Delicious recipes and fresh ingredients, delivered daily.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-darkBg px-6 py-3 rounded-lg text-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  
  export default HeroSection;