import { getDish } from "@/lib/meals";
import Image from "next/image";

const DishPage =  ({params}) => {
    const dish = getDish(params.dishId);
    return (
        <>
            <header className="text-3xl font-bold tracking-wide mb-4 md:text-6xl md:tracking-widest md:mb-8 mt-20 text-center">
                <h1 className="text-yellow-500">{dish.title}</h1>
                <p className="text-gray-300 md:text-2xl pt-6">{dish.summary}</p>
            </header>
            <div className="flex justify-center">
                <Image src={dish.image} alt="Dish Name" width={500} height={300} />
            </div>
            <div className="px-4 md:px-16">
                <p>Ingredients: <br /> {dish.ingredients}</p>
                <p>Instructions: <br/> {dish.instructions} </p>
            </div>
        </>
      
    );
};


export default DishPage;