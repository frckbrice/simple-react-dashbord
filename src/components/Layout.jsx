import React from "react";
import BaseForm from "./forms/BaseForm";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/3 bg-gray-100">
        <div className="h-full flex flex-col items-center justify-center">
          {" "}
          <h1 className="font-bold rebase body-font font-caveat">
            {" "}
            Rebase Academy
          </h1>
          <span> React Dashboard project</span>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center">
        <div>
          {" "}
          <BaseForm />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
