import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LayoutPage: React.FC<any | Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-700">
      {children}
    </div>
  );
};

export default LayoutPage;
