'use client'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-100">Page not found</p>
        <a href="/" className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-orange-400">
          Go back to Home
        </a>
      </div>
    </div>
  );      
};

export default ErrorPage; 

