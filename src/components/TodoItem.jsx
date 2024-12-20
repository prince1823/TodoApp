import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { COLOR_OPTIONS } from '../utils/constants';

function TodoItem({ todo, onToggle, onDelete, onColorChange }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white border rounded-lg group hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            todo.completed ? 'border-green-500 bg-green-500' : 'border-gray-300'
          }`}
        >
          {todo.completed && <CheckCircle className="w-4 h-4 text-white" />}
        </button>
        <span
          className={`text-lg ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        <select
          value={todo.color}
          onChange={(e) => onColorChange(todo.id, e.target.value)}
          className={`px-2 py-1 rounded border ${
            todo.color === 'purple'
              ? 'text-purple-600'
              : todo.color === 'blue'
              ? 'text-blue-600'
              : 'text-gray-600'
          }`}
        >
          <option value="gray">▼</option>
          {COLOR_OPTIONS.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
        <button
          onClick={() => onDelete(todo.id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <XCircle className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;