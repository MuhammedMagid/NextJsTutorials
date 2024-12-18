const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center text-white">
                <div className="mb-4">
                    {/* Spinner */}
                    <div className="w-16 h-16 border-4 border-t-4 border-yellow-500 border-solid rounded-full animate-spin mx-auto"></div>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-yellow-500">Loading...</h1>
                <p className="text-gray-300 mt-2 md:text-lg">Please wait while we prepare your experience.</p>
            </div>
        </div>
    );
};

export default LoadingPage;
