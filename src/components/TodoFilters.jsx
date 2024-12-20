import React from 'react';
import { COLOR_OPTIONS } from '../utils/constants';

function TodoFilters({ statusFilter, colorFilters, onStatusChange, onColorToggle }) {
  return (
    <>
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
                onChange={() => onStatusChange(status.toLowerCase())}
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
          {COLOR_OPTIONS.map((color) => (
            <div key={color} className="flex items-center">
              <input
                type="checkbox"
                id={color}
                checked={colorFilters.includes(color.toLowerCase())}
                onChange={() => onColorToggle(color.toLowerCase())}
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
    </>
  );
}

export default TodoFilters;