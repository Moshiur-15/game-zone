import React from 'react';

const Title = ({title}) => {
    return (
        <h2 className='text-3xl font-extrabold text-center text-gray-800 mb-1 dark:text-white'>
            {title || ""}
        </h2>
    );
};

export default Title;