import React from 'react';
import ItemList from './item-list'; // Ensure the import path is correct

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
