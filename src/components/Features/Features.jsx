import React from 'react';
import {CheckCircleIcon} from "@heroicons/react/24/solid";

const Features = ({feature}) => {
    return (
        <div className='flex gap-2 items-center'>
            <CheckCircleIcon className="h-4 w-4 text-green-500" />
            <h2>{feature}</h2>
        </div>
           
    );
};

export default Features;