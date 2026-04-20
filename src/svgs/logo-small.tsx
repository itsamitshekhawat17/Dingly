import Image from "next/image";

type Props = {
  className?: string;
};

export const LogoSmall = ({ className = "h-auto w-33" }: Props) => {
  return (
    <Image
      src="/photos/dingly-logo.png"
      alt="Dingly logo"
      width={415}
      height={305}
      priority
      className={className}
    />
  );
};