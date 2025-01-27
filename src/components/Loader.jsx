import React from "react";

const Loader = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div
        className="w-16 h-16 bg-cover bg-center rounded-full animate-spin"
        style={{ backgroundImage: "url('/cricscore.svg')" }}
      ></div>
    </div>
    </>
  );
};

export default Loader;