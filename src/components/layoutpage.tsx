import React from "react";
import { Props } from "@util/types";

const LayoutPage: React.FC<any | Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-700">
      {children}
    </div>
  );
};

export default LayoutPage;
