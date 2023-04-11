import { Input, Button } from "@/components/lib";
import { Props } from "@util/types";

export default function Modal({ children }: Props) {
  return (
    <div className="group border-2 border-slate-50 w-80 bg-gray-900 px-4 py-6 text-sm font-medium text-gray-50 absolute">
      {children}
      <Input
        type="referral code"
        name="floating_referral"
        id="floating_referral"
        placeholder=" "
        required
      />
      <Button>Submit referral</Button>
    </div>
  );
}
