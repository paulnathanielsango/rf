import { Input, Button } from "@/components/lib";

const SignIn = () => {
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

      <div className="flex items-center justify-center py-4">
        <a className="font-medium text-blue-500 duration-300 group-hover:text-blue-500/80">
          Referral Code
        </a>
      </div>
    </div>
  );
};

export default SignIn;
