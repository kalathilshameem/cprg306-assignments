import React from 'react';

export default function Item({ id, name, category, onSelect }) {
    if (!name || !category) {
        console.error('Missing data for item', { id, name, category });
    }

    return (
        <div onClick={() => onSelect({ id, name, category })} className="p-4 bg-gray-800 rounded cursor-pointer">
            <h3 className="text-lg font-semibold">{name || 'Unnamed Item'}</h3>
            <p className="text-sm text-gray-400">{category || 'Uncategorized'}</p>
        </div>
    );
}
