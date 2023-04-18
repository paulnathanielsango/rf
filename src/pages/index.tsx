import React from "react";
import { useSession, signOut } from "next-auth/react";
import LayoutPage from "@components/layoutpage";
import SignIn from "@/components/dashboards/signIn";
import Modal from "@/components/dashboards/modal";

export default function Home() {
  const { data: session } = useSession();
  const [modal, setModal] = React.useState(false);

  console.log(session);

  const handleReferral = () => {
    setModal(!modal);
  };

  return (
    <LayoutPage>
      {!session ? (
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
      ) : (
        <>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            sign out
          </a>
        </>
      )}
      {modal ? (
        <Modal>
          <a
            className="flex justify-end w-full cursor-pointer"
            onClick={handleReferral}
          >
            <span className="px-4">X</span>
          </a>
        </Modal>
      ) : (
        ""
      )}
    </LayoutPage>
  );
}
