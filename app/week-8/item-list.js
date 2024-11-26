'use client';

import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items = [], onItemSelect }) {
    console.log('Items:', items); // Check the structure of the data passed in
    const [sortBy, setSortBy] = useState('name');
    const [groupByCategory, setGroupByCategory] = useState(false);

    // Check if items are an array and have proper properties
    const sortedItems = Array.isArray(items) ? [...items].sort((a, b) => {
        if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
        if (sortBy === 'category') return (a.category || '').localeCompare(b.category || '');
        return 0;
    }) : [];

    const groupedItems = groupByCategory
        ? (Array.isArray(items) ? items.reduce((grouped, item) => {
            if (!grouped[item.category]) grouped[item.category] = [];
            grouped[item.category].push(item);
            return grouped;
        }, {}) : {})
        : null;

    const handleSort = (sortType) => {
        setSortBy(sortType);
        setGroupByCategory(false);
    };

    const handleGroupByCategory = () => {
        setGroupByCategory(true);
        setSortBy('');
    };

    return (
        <div className="space-y-4">
            <div className="flex space-x-4 mb-6">
                <span className="px-2 py-2 font-medium text-white">Sort by:</span>
                <button onClick={() => handleSort('name')} className={`px-4 py-2 font-medium rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    Name
                </button>
                <button onClick={() => handleSort('category')} className={`px-4 py-2 font-medium rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    Category
                </button>
                <button onClick={handleGroupByCategory} className={`px-4 py-2 font-medium rounded ${groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    Grouped Category
                </button>
            </div>

            {/* Render grouped items or regular sorted items */}
            {groupByCategory ? (
                Object.keys(groupedItems).sort().map((category) => (
                    <div key={category}>
                        <h2 className="text-lg font-semibold text-white capitalize mb-2">{category}</h2>
                        <ul className="space-y-2">
                            {groupedItems[category].map((item) => (
                                <Item key={item.id} {...item} onSelect={onItemSelect} />
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <ul className="space-y-4">
                    {sortedItems.length > 0 ? (
                        sortedItems.map((item) => (
                            <Item key={item.id} {...item} onSelect={onItemSelect} />
                        ))
                    ) : (
                        <li className="text-white">No items available</li>
                    )}
                </ul>
            )}
        </div>
    );
}
