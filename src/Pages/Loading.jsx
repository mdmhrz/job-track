import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex gap-2 justify-center items-center'>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>

        </div>
    );
};

export default Loading;