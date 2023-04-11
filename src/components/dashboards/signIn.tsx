import { Input, Button } from "@/components/lib";
import { Props } from "@util/types";

const SignIn: React.FC<any | Props> = ({ children }) => {
  return (
    <div className="group w-80 bg-gray-900 px-4 py-6 text-sm font-medium text-gray-50">
      <form>
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
        <Button>Sign In</Button>
      </form>
      {children}
    </div>
  );
};

export default SignIn;
