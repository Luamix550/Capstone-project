// Column.js
import React from 'react';

const Column = ({ title, children }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Column;
