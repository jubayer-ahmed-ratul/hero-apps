import React from "react";

const PageLoader = ({ text = "Loading..." }) => {
  return (
    <div className="w-full flex justify-center py-10">
      <p className="font-bold text-2xl flex items-center gap-3">
        <span className="loading loading-spinner text-primary"></span>
        {text}
      </p>
    </div>
  );
};

export default PageLoader;
