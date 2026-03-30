import { BigLogo, Logo } from "@/src/icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-3">
      <Link href="/">
        <Logo className="h-20 w-fit" />
      </Link>
    </footer>
  );
};
