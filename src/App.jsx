import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import TodoActions from './components/TodoActions';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setTodoColor,
    markAllCompleted,
    clearCompleted,
    filteredTodos,
    remainingTodos,
    statusFilter,
    setStatusFilter,
    colorFilters,
    toggleColorFilter
  } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-4xl font-bold text-red-500 text-center py-6">
          Todos
        </h1>
        
        <div className="p-6">
          <TodoInput onAdd={addTodo} />

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onColorChange={setTodoColor}
          />

          <div className="mt-6 flex flex-wrap justify-between items-center gap-4 pt-4 border-t">
            <TodoActions
              onMarkAllCompleted={markAllCompleted}
              onClearCompleted={clearCompleted}
              remainingTodos={remainingTodos}
            />

            <TodoFilters
              statusFilter={statusFilter}
              colorFilters={colorFilters}
              onStatusChange={setStatusFilter}
              onColorToggle={toggleColorFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}