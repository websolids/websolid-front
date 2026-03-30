import { Logo } from "@/src/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 sticky top-0 bg-[#E0E3FF] z-10">
      <Link href={"/"}>
        <Logo className="h-10 w-10 md:h-14 md:w-14" />
      </Link>
      <nav className="hidden md:flex items-center gap-4 text-xl">
        <Link href="#about">О нас</Link>
        <Link href="#projects">Проекты</Link>
        <Link href="#services">Услуги</Link>
        <Link href="#team">Команда</Link>
        <Link href="#contacts">Контакты</Link>
      </nav>
      <div>
        <Link
          href="#contacts"
          className="button button--outline button--lg border-accent text-accent hover:bg-accent hover:text-white transition-colors hidden md:flex"
        >
          Связаться с нами
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
};
