import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onDelete, onColorChange }) {
  return (
    <div className="mt-6 space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onColorChange={onColorChange}
        />
      ))}
    </div>
  );
}

export default TodoList;