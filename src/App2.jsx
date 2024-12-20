import React, { useState } from 'react';
import { CheckCircle, XCircle, ChevronDown } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React', completed: true, color: 'gray' },
    { id: '2', text: 'Learn Redux', completed: false, color: 'purple' },
    { id: '3', text: 'Build something fun!', completed: false, color: 'blue' },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [colorFilters, setColorFilters] = useState(['blue']);

  const addTodo = (e) => {
    if (e.key === 'Enter' && newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo,
          completed: false,
          color: 'gray',
        },
      ]);
      setNewTodo('');
    }
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-4xl font-bold text-red-500 text-center py-6">
          Todos
        </h1>
        
        <div className="p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 text-lg border-b-2 border-gray-200 focus:border-blue-500 outline-none"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={addTodo}
            />
          </div>

          <div className="mt-6 space-y-2">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-3 bg-white border rounded-lg group hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      todo.completed
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {todo.completed && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
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
                    onChange={(e) => setTodoColor(todo.id, e.target.value)}
                    className={`px-2 py-1 rounded border ${
                      todo.color === 'purple'
                        ? 'text-purple-600'
                        : todo.color === 'blue'
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}
                  >
                    <option value="gray">▼</option>
                    <option value="purple">Purple</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                  </select>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <XCircle className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-between items-center gap-4 pt-4 border-t">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Actions</h3>
              <div className="space-x-2">
                <button
                  onClick={markAllCompleted}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Mark All Completed
                </button>
                <button
                  onClick={clearCompleted}
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

            <div>
              <h3 className="font-semibold text-gray-700">Filter by Status</h3>
              <div className="space-y-1">
                {['All', 'Active', 'Completed'].map((status) => (
                  <div key={status} className="flex items-center">
                    <input
                      type="radio"
                      id={status}
                      name="status"
                      checked={statusFilter === status.toLowerCase()}
                      onChange={() => setStatusFilter(status.toLowerCase())}
                      className="mr-2"
                    />
                    <label htmlFor={status}>{status}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Filter by Color</h3>
              <div className="space-y-1">
                {['Green', 'Blue', 'Orange', 'Purple', 'Red'].map((color) => (
                  <div key={color} className="flex items-center">
                    <input
                      type="checkbox"
                      id={color}
                      checked={colorFilters.includes(color.toLowerCase())}
                      onChange={() => toggleColorFilter(color.toLowerCase())}
                      className="mr-2"
                    />
                    <label
                      htmlFor={color}
                      className={`text-${color.toLowerCase()}-600`}
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
