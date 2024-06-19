import React from 'react';

const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-blue-600 h-1 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
