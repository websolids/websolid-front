"use client";

import { BigLogo, MenuIcon, XMarkIcon } from "@/src/icons";
import { Button, Drawer, useOverlayState } from "@heroui/react";
import Link from "next/link";

export const BurgerMenu = () => {
  const state = useOverlayState();

  return (
    <Drawer isOpen={state.isOpen}>
      <Button onPress={state.open} variant="ghost" className="md:hidden">
        <MenuIcon className="text-accent" />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right" className="h-dvh">
          <Drawer.Dialog className="max-w-full w-full rounded-none bg-[#E0E3FF]">
            <Drawer.Header className="flex flex-row items-center justify-between">
              <Drawer.Heading>
                <BigLogo className="h-10 w-fit" />
              </Drawer.Heading>
              <Button onPress={state.close} variant="ghost">
                <XMarkIcon className="text-accent" />
              </Button>
            </Drawer.Header>
            <Drawer.Body className="flex flex-col justify-between">
              <nav className="flex flex-col gap-2 text-xl text-black font-bold">
                <Link onClick={state.close} href="#about">
                  О нас
                </Link>
                <Link onClick={state.close} href="#projects">
                  Проекты
                </Link>
                <Link onClick={state.close} href="#services">
                  Услуги
                </Link>
                <Link onClick={state.close} href="#team">
                  Команда
                </Link>
                <Link onClick={state.close} href="#contacts">
                  Контакты
                </Link>
              </nav>
              <Link
                onClick={state.close}
                href="#contacts"
                className="button button--outline button--lg border-accent text-accent hover:bg-accent hover:text-white transition-colors flex w-full"
              >
                Связаться с нами
              </Link>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};
