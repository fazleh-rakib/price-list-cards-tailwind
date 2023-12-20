import React from 'react';

const Link = ({route}) => {
    console.log(route);
    return (
        <li className='mr-10 hover:bg-purple-800 p-2 rounded-xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;