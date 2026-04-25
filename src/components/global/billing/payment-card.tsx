import { Button } from "@/components/ui/button";
import { plans } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

function PaymentCard({ label, current, landing }: Props) {

  return (
    <div
      className={cn(
        label !== current
          ? "bg-linear-to-br from-white/10 via-white/6 to-white/4"
          : "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500",
        "p-px rounded-[1.15rem] overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
      )}
    >
      <div
        className={cn(
          landing && "radial--gradient--pink",
          "flex h-full flex-col rounded-[1.1rem] border border-white/10 bg-[#111111] px-6 py-6 transition-transform duration-300 hover:-translate-y-0.5 sm:px-7 sm:py-7"
        )}
      >
        {landing ? (
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-[2rem]">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-[2rem]">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </h2>
        )}
        <p className="mt-1 max-w-sm text-sm leading-6 text-white/70 sm:text-[15px]">
          This is what your plan covers for automation and Ai features
        </p>
        {label === "PRO" ? (
          <span className="mt-3 inline-flex bg-linear-to-r text-3xl font-semibold tracking-tight from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent sm:text-[2.35rem]">
            Smart AI
          </span>
        ) : (
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
            Standard
          </p>
        )}
        {label === "PRO" ? (
          <p className="mb-3 mt-1 text-white/90">
            <b className="text-2xl font-semibold text-white sm:text-[1.9rem]">$99</b>
            <span className="text-sm text-white/70">/month</span>
          </p>
        ) : (
          <p className="mb-3 mt-1 text-2xl font-semibold text-white sm:text-[1.8rem]">Free</p>
        )}
        <div className="mt-1 flex flex-1 flex-col gap-3">
          {plans[label === "PRO" ? 1 : 0].features.map((i) => (
            <p key={i} className="flex gap-2 text-sm leading-6 text-white/72 sm:text-[15px]">
              <CircleCheck className="mt-0.5 shrink-0 text-indigo-400" />
              <span>{i}</span>
            </p>
          ))}
        </div>
        {landing ? (
          <Button
            className={cn(
              "mt-6 rounded-full px-5 py-3 text-sm font-medium shadow-lg transition duration-200",
              label === "PRO"
                ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110"
                : "bg-white/10 text-white hover:bg-white/15"
            )}
          >
            {label === current
              ? "Get Started"
              : current === "PRO"
              ? "Free"
              : "Get Started"}
          </Button>
        ) : (
          <Button
            className={cn(
              "mt-6 rounded-full px-5 py-3 text-sm font-medium shadow-lg transition duration-200",
              label === current
                ? "bg-white/12 text-white hover:bg-white/16"
                : "bg-white/10 text-white hover:bg-white/15"
            )}
          >
            {label === current
              ? "Active"
              : current === "PRO"
              ? "Downgrade"
              : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default PaymentCard;