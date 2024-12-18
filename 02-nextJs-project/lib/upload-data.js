'use server'

export async function uploadData(formData) {
    const dish = {
      dishName: formData.get('dishName'),
      summary: formData.get('description'),
      instructions: formData.get('steps'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),

    };
    console.log(dish);
    }