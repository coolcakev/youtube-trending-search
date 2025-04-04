import React from 'react';

const Loader = () => {

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#8888885e] bg-opacity-75 z-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
