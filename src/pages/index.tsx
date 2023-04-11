import React from "react";
import LayoutPage from "@components/layoutpage";
import SignIn from "@/components/dashboards/signIn";
import Modal from "@/components/dashboards/modal";
import { Button } from "@/components/lib";

export default function Home() {
  const [modal, setModal] = React.useState(false);

  const handleReferral = () => {
    setModal(!modal);
  };

  return (
    <LayoutPage>
      <SignIn>
        <div className="flex items-center justify-center py-4">
          <a
            className="font-medium text-blue-500 duration-300 group-hover:text-blue-500/70 cursor-pointer"
            onClick={handleReferral}
          >
            Referral Code
          </a>
        </div>
      </SignIn>
      {!modal ? (
        <Modal>
          <a className="flex justify-end w-full cursor-pointer" onClick={handleReferral}>
            <span className="px-4">X</span>
          </a>
        </Modal>
      ) : (
        ""
      )}
    </LayoutPage>
  );
}
