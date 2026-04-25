import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
};

function Sheet({ trigger, children, className, side }: Props) {
  return (
    <ShadcnSheet>
      <SheetTrigger asChild>
        <button type="button" className={className} aria-label="Open menu">
          {trigger}
        </button>
      </SheetTrigger>
      <SheetContent side={side} className="p-0">
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
}

export default Sheet;