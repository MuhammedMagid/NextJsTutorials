'use client'

import { uploadData } from "@/lib/upload-data";
import SubmissionStatus from "@/components/dishes/submission-status";
import Select from "react-select";

//meta data for the share dish page



const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#2d3748', // Dark background color
    color: '#fff', // White text color
    borderColor: '#4a5568', // Darker border color
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#2d3748', // Dark background color for the dropdown
    color: '#fff', // White text color for the dropdown
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff', // White text color for the selected value
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#a0aec0', // Light gray placeholder color
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#4a5568' : '#2d3748', // Darker background for selected option
    color: '#fff', // White text color for options
    '&:hover': {
      backgroundColor: '#4a5568', // Darker background on hover
    },
  }),
};

const cuisines = [
  { value: 'african-cuisine', label: 'African Cuisine' },
  { value: 'asian-cuisine', label: 'Asian Cuisine' },
  { value: 'european-cuisine', label: 'European Cuisine' },
  { value: 'latin-american-cuisine', label: 'Latin American Cuisine' },
  { value: 'north-american-cuisine', label: 'North American Cuisine' },
  { value: 'caribbean-cuisine', label: 'Caribbean Cuisine' },
  { value: 'middle-eastern-cuisine', label: 'Middle Eastern Cuisine' },
  { value: 'oceanian-cuisine', label: 'Oceanian Cuisine' }
];
const ShareDishPage = () => {


  return (
    <div className=" min-h-screen p-8 text-yellow-600">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-orange-500">Share Your Delicious Dish</h1>
        <p className="text-lg text-orange-400">Help others discover new culinary delights!</p>
      </header>

      <form action={uploadData} className="max-w-lg mx-auto bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-400 font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email"  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" required />
        </div>

        <div className="mb-4">
          <label htmlFor="dishName" className="block text-gray-400 font-bold mb-2">Dish Name:</label>
          <input type="text" id="dishName" name="dishName"  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" required />
        </div>
           
        <div className="mb-4">
          <label htmlFor="country" className="block  text-gray-400 font-bold mb-2">Cuisine:</label>
          <Select 
            options={cuisines}
            className="w-full"
            classNamePrefix="react-select"
            placeholder="Select a cuisine"
            styles={customStyles}
            required
          />
        </div>
        

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-400 font-bold mb-2">Short Description:</label>
          <textarea id="description" name="description"  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" rows="3" required></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-400 font-bold mb-2">Ingredients:</label>
          <textarea id="ingredients" name="ingredients"className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" rows="4" required></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-400 font-bold mb-2">Method:</label>
          <textarea id="steps" name="steps" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" rows="6"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-400 font-bold mb-2">Tags (e.g., sweet, spicy):</label>
          <input type="text" id="tags" name="tags"   className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300" />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-400 font-bold mb-2">Picture Upload:</label>
          <input type="file" id="image" name="image" className="w-full " accept="image/*" />
        </div>

        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600">Share Dish</button>        
      </form>
    </div>
  );
};

export default ShareDishPage;