import React from "react";
import { Input, Button } from "@/components/lib";
import { Props } from "@util/types";
import { signIn } from "next-auth/react";
import { SignInResponse } from "next-auth/react";

const SignIn: React.FC<any | Props> = ({ children }) => {
  const [response, setResponse] = React.useState<SignInResponse | any>(null);

  const SignInHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    options: any
  ) => {
    if (options.redirect) {
      return signIn("credentials", {
        email: options.email,
        password: options.password,
      });
    }

    const response = await signIn("credentials", {
      email: options.email,
      password: options.password,
    });

    setResponse(response);
    console.log("response ", response);
  };

  return (
    <div className="group w-80 bg-gray-900 px-4 py-6 text-sm font-medium text-gray-50">
      <div>
        <Input
          type="username"
          name="floating_username"
          id="floating_username"
          placeholder=" "
          required
        />
        <Input
          type="pw"
          name="floating_pw"
          id="floating_pw"
          placeholder=" "
          required
        />
        <Button
          onClick={(e) =>
            SignInHandler(e, {
              redirect: true,
              email: "ps@vs.com",
              password: "pw0225",
            })
          }
        >
          Sign In
        </Button>
      </div>
      {children}
    </div>
  );
};

export default SignIn;
