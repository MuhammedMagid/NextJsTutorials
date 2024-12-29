import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getAllDishes() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const stmt = db.prepare('SELECT * FROM meals');
    const meals = stmt.all();
    return meals;
}

export function getDish(slug) {
    const stmt = db.prepare('SELECT * FROM meals WHERE slug= ?');
    const dish = stmt.get(slug);
    return dish;
}






export async function addDish(data) {
    const { creator ,creator_email, title, summary, instructions, image} = data;


    const slug = slugify(title, { lower: true });


    const extension = data.image.name.split('.').pop(); 
    const imageName = `${slug}.${extension}`;

   const stream= fs.createWriteStream(`./public/dishesImages/${imageName}`);

   const bufferedImage = await data.image.arrayBuffer();

   stream.write(Buffer.from(bufferedImage), (err) => {
       if (err) {
           throw new Error('Error writing image to disk');
       }
    });

    data.image = `/dishesImages/${imageName}`;
    
/*

*/
    // Insert data into the database
    const stmt = db.prepare('INSERT INTO meals (creator ,creator_email, title, slug, summary, instructions, image) VALUES (?, ?, ?, ?, ?, ?, ?)');
    const info = stmt.run( creator ,creator_email, title, slug, summary, instructions, data.image);

    return info;
  

}
