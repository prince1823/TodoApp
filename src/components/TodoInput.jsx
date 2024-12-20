import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [newTodo, setNewTodo] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="w-full px-4 py-3 text-lg border-b-2 border-gray-200 focus:border-blue-500 outline-none"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TodoInput;