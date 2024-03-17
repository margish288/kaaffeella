import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h3 className="text-4xl font-extrabold px-4 py-2">Page not found </h3>
      <p className="text-2xl font-semibold">
        Page you are looking for... might not exist !
      </p>
    </div>
  );
};

export default NotFound;
