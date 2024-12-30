'use server'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { addDish } from "./meals";  


function invalidInput(input) {
    return input.trim() === '' || input === null;
  }

export async function uploadData(formData) {
    const dish = {
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('dishName'),
      summary: formData.get('description'),
      instructions: formData.get('steps'),
      image: formData.get('image')

    };

    if (invalidInput(dish.creator) || invalidInput(dish.creator_email) || invalidInput(dish.title) || invalidInput(dish.summary) || invalidInput(dish.instructions)) {
      throw new Error('Please fill in all fields');
        
      }
    await addDish(dish);
    revalidatePath('/dishes');
    redirect('/dishes');
    }
 