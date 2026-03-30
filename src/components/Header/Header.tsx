import { Logo } from "@/src/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 sticky top-0 bg-[#E0E3FF] z-10">
      <Link href={"/"}>
        <Logo className="h-14" />
      </Link>
      <nav className="flex items-center gap-4 text-xl">
        <Link href="#about">О нас</Link>
        <Link href="#projects">Проекты</Link>
        <Link href="#services">Услуги</Link>
        <Link href="#team">Команда</Link>
        <Link href="#contacts">Контакты</Link>
      </nav>
      <div>
        <Button
          size="lg"
          variant="outline"
          className="border-accent text-accent hover:bg-accent hover:text-white transition-colors"
        >
          Связаться с нами
        </Button>
      </div>
    </header>
  );
};
