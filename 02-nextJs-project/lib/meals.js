import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getAllDishes() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const stmt = db.prepare('SELECT * FROM meals');
    const meals = stmt.all();
    return meals;
}

export  function getDish(slug) {
    const stmt = db.prepare('SELECT * FROM meals WHERE slug= ?');
    const dish = stmt.get(slug);
    return dish;
}