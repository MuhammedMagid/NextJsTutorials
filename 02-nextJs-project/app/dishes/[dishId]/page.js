import { getDish } from "@/lib/meals";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const dish = await getDish(params.dishId);
  return {
    title: dish.title,
    description: dish.summary,
    openGraph: {
      title: dish.title,
      description: dish.summary,
      images: [
        {
          url: dish.image,
          width: 800,
          height: 600,
          alt: dish.title,
        },
      ],
    },
  };
}

const DishPage = ({ params }) => {
  const dish = getDish(params.dishId);
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-2">{dish.title}</h1>
        <p className="text-gray-300 text-lg md:text-xl">{dish.summary}</p>
      </header>
      <div className="flex justify-center mb-8">
        <Image src={dish.image} alt={dish.title} width={500} height={300} className="rounded-lg shadow-lg" />
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <p className="mb-6">{dish.ingredients}</p>
        <hr className="my-6 border-t-2 border-gray-700" />
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <p style={{ whiteSpace: 'pre-wrap' }}>{dish.instructions}</p>
      </div>
    </div>
  );
};

export default DishPage;