import DashDish from "@/components/dishes/dash-dish";
import { getAllDishes } from "@/lib/meals";
import Link from "next/link";

export const metadata = {
    title: ' Browse Dishes',
    description: 'Embark on a culinary adventure and savor the tastes of the world, from beloved classics to bold and exotic flavors.'
}

const Dishes = async () => {
    const meals = await getAllDishes();

    return (
        <>
            <header className="text-3xl font-bold tracking-wide mb-4 md:text-6xl md:tracking-widest md:mb-8 mt-20 text-center">
                <h1 className="text-yellow-500">Explore Our Flavorful Creations</h1>
                <p className="text-gray-300 md:text-2xl pt-6">Embark on a culinary adventure and savor the tastes of the world, from beloved classics to bold and exotic flavors.</p>
            </header>
            <Link href="/dishes/share">
                <div className="flex justify-center mb-6">
                    <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 focus:outline-none transition duration-200 transform hover:scale-105">
                        Share Your Dish with Us
                    </button>
                </div>
            </Link>
            <main className="px-4 md:px-16">
                <DashDish meals={meals} />
            </main>
        </>
    );
};

export default Dishes;
