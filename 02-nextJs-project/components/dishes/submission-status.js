'use client'

import { useFormState } from 'react-dom';

export default function SubmissionStatus() {
  const {pending} = useFormState();
  return ( 
    <button disabled={pending} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-orange-300">
      {pending ? 'Submitting...' : 'Submit'}
    </button>
   
  );

}

