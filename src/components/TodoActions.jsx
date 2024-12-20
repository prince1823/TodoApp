import React from 'react';

function TodoActions({ onMarkAllCompleted, onClearCompleted, remainingTodos }) {
  return (
    <>
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-700">Actions</h3>
        <div className="space-x-2">
          <button
            onClick={onMarkAllCompleted}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Mark All Completed
          </button>
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700">Remaining Todos</h3>
        <p className="text-gray-600">{remainingTodos} items left</p>
      </div>
    </>
  );
}

export default TodoActions;