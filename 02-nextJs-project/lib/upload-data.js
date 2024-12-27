'use server'

export async function uploadData(formData) {
    const dish = {
      creator: formData.get('name'),
      email: formData.get('email'),
      title: formData.get('dishName'),
      country: formData.get('country'),
      summary: formData.get('description'),
      ingredients: formData.get('ingredients'),
      constructions: formData.get('steps'),
      slug: formData.get('tags'),
      image: formData.get('image')

    };
    console.log(dish);
    }
 