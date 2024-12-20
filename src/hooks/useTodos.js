import { useState } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React', completed: true, color: 'gray' },
    { id: '2', text: 'Learn Redux', completed: false, color: 'purple' },
    { id: '3', text: 'Build something fun!', completed: false, color: 'blue' },
  ]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [colorFilters, setColorFilters] = useState(['blue']);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        text,
        completed: false,
        color: 'gray',
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setTodoColor = (id, color) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, color } : todo))
    );
  };

  const markAllCompleted = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleColorFilter = (color) => {
    setColorFilters(
      colorFilters.includes(color)
        ? colorFilters.filter((c) => c !== color)
        : [...colorFilters, color]
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const statusMatch =
      statusFilter === 'all' ||
      (statusFilter === 'active' && !todo.completed) ||
      (statusFilter === 'completed' && todo.completed);
    const colorMatch =
      colorFilters.length === 0 || colorFilters.includes(todo.color);
    return statusMatch && colorMatch;
  });

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return {
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
  };
}