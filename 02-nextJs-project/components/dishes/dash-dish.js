import style from "./dash-dish.module.css";
import DishCard  from "./card";
const DashDish = ({meals}) => {
    return (
        <ul className={style.dish}>
            {meals.map((meal) => (
                <li key={meal.slug}>
                    <DishCard {...meal} />
                </li>
            ))}
        </ul>
)}


export default DashDish;