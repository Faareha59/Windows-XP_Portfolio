import React from 'react';

const Videos = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Videos</h2>
      <p className="mb-2">Here are some of my videos:</p>
      <ul className="list-disc pl-5">
        <li>
          <video controls className="w-full">
            <source src="/Videos/Art And Heaven Project.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-2">Sample Video</p>
        </li>
        {/* Add more videos as needed */}
      </ul>
    </div>
  );
};

export default Videos;