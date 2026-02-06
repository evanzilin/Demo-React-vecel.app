// src/components/Textarea.js

import React from 'react';

const Textarea = ({ placeholder, rows, ...props }) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      rows={rows}
      className="w-full focus:outline-none p-4 rounded-lg bg-gray-200 text-gray-800 x-lg:w-[1080px] md:h-[213px]"
    />
  );
};

export default Textarea;
